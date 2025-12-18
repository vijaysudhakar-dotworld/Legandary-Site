import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, useTexture, Billboard } from '@react-three/drei'
import { PerspectiveCamera, PCFSoftShadowMap, PCFShadowMap, BasicShadowMap, ACESFilmicToneMapping, ReinhardToneMapping, LinearToneMapping, NoToneMapping, NeutralToneMapping, Group, DirectionalLight } from 'three'
import { useScrollAnimation } from '../utils/useScrollAnimation'

function Model({ url, position, rotation, scale, shadowsEnabled, modelRef }: { url: string, position: [number, number, number], rotation: [number, number, number], scale: [number, number, number], shadowsEnabled: boolean, modelRef: (node: Group) => void }) {
    const gltf = useGLTF(url)

    useEffect(() => {
        if (!gltf || !gltf.scene) return

        gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
                child.castShadow = shadowsEnabled
                child.receiveShadow = shadowsEnabled
                if (child.material) {
                    child.material.needsUpdate = true
                    // Force material updates for shadow visibility
                    child.material.forceUpdate = true
                }
            }
        })

    }, [gltf, shadowsEnabled])

    return <primitive ref={modelRef} object={gltf.scene} position={position} rotation={rotation} scale={scale} />
}

function MovingCloud({ position, speed, scale, color = "#ffa2a2ff" }: { position: [number, number, number], speed: number, scale: [number, number, number], color?: string }) {
    const cloudRef = useRef<any>(null)
    const texture = useTexture('/cloud.png')
    const initialX = position[0]

    useFrame((state) => {
        if (cloudRef.current) {
            cloudRef.current.position.x = initialX + Math.sin(state.clock.elapsedTime * speed) * 1
        }
    })

    return (
        <Billboard ref={cloudRef} position={position}>
            <mesh scale={scale}>
                <planeGeometry />
                <meshBasicMaterial map={texture} transparent={true} depthWrite={false} opacity={0.25} toneMapped={false} color={color} />
            </mesh>
        </Billboard>
    )
}

function Scene() {
    const { camera, scene, gl } = useThree()
    const dirLightRef = useRef<DirectionalLight>(null)
    const controlsRef = useRef<any>(null)
    const [building, setBuilding] = useState<Group | null>(null)
    const [shadowUpdateFlag, setShadowUpdateFlag] = useState(0)

    // Scroll Animation Hook
    useScrollAnimation(camera as PerspectiveCamera, controlsRef.current, building)

    // Hardcoded defaults from BuildingViewer
    const config = {
        ambientIntensity: 5.72,
        hemiIntensity: 0.43,
        directionalIntensity: 20,
        fillIntensity: 0.05,
        directionalPos: [15.5, 16, 10.5] as [number, number, number],
        directionalTarget: [0, 0, 0] as [number, number, number],
        buildingPos: [0, 0, 0] as [number, number, number],
        buildingRot: [0, 0, 0] as [number, number, number],
        buildingScale: [1, 1, 1] as [number, number, number],
        envIntensity: 10.14,
        envValue: 'sunset',
        ambientColor: '#ffdfd1',
        directionalColor: '#ffd4c2',
        shadowsEnabled: true,
        shadowRadius: 9.7,
        shadowBias: -0.001,
        shadowNormalBias: 0.1,
        exposure: 0.1,
        toneMapping: 'Neutral',
        shadowQuality: 'high',
        shadowResolution: 2048,
        shadowSoftness: 10,
        shadowDarkness: 0,
        cameraPos: [13.2678760072932, 9.54023342452855, 64.77327507868063] as [number, number, number],
        cameraTarget: [-15.6, 20.9, 0] as [number, number, number],
        fov: 20
    }

    // Initial camera setup
    useEffect(() => {
        if (!camera) return
        camera.position.set(config.cameraPos[0], config.cameraPos[1], config.cameraPos[2])
            ; (camera as PerspectiveCamera).fov = config.fov
        camera.updateProjectionMatrix()
    }, [camera])

    // Force shadow map regeneration after model loads
    useEffect(() => {
        if (!building) return

        // Force a shadow map update
        const timer = setTimeout(() => {
            setShadowUpdateFlag(prev => prev + 1)
        }, 100)

        return () => clearTimeout(timer)
    }, [building])

    // Apply renderer settings with shadow map regeneration
    useEffect(() => {
        if (!gl) return

        try {
            if (config.toneMapping === 'ACES') (gl as any).toneMapping = ACESFilmicToneMapping
            else if (config.toneMapping === 'Reinhard') (gl as any).toneMapping = ReinhardToneMapping
            else if (config.toneMapping === 'Linear') (gl as any).toneMapping = LinearToneMapping
            else if (config.toneMapping === 'Neutral') (gl as any).toneMapping = NeutralToneMapping
            else if (config.toneMapping === 'None') (gl as any).toneMapping = NoToneMapping
            else (gl as any).toneMapping = ReinhardToneMapping

                ; (gl as any).toneMappingExposure = config.exposure
                ; (gl as any).shadowMap.enabled = !!config.shadowsEnabled
                ; (gl as any).shadowMap.autoUpdate = true
                ; (gl as any).shadowMap.needsUpdate = true

            if (config.shadowsEnabled) {
                if (config.shadowQuality === 'low') (gl as any).shadowMap.type = BasicShadowMap
                else if (config.shadowQuality === 'medium') (gl as any).shadowMap.type = PCFShadowMap
                else (gl as any).shadowMap.type = PCFSoftShadowMap

                // Force renderer to regenerate shadow maps
                gl.shadowMap.needsUpdate = true
            }
        } catch (e) {
            console.warn('Renderer settings error:', e)
        }
    }, [gl, config, shadowUpdateFlag]) // Added shadowUpdateFlag dependency

    // Update directional light with forced shadow regeneration
    useEffect(() => {
        const dl = dirLightRef.current
        if (!dl) return

        // Force shadow map regeneration
        if (dl.shadow) {
            const res = config.shadowResolution || 2048
            dl.shadow.mapSize.width = res
            dl.shadow.mapSize.height = res

            // Invalidate the current shadow map to force regeneration
            if (dl.shadow.map) {
                dl.shadow.map.dispose()
                dl.shadow.map = null as any
            }

            dl.shadow.needsUpdate = true
            // dl.shadow.camera.needsUpdate = true

            if (dl.shadow.camera) {
                dl.shadow.camera.far = 50
                dl.shadow.camera.left = -20
                dl.shadow.camera.right = 20
                dl.shadow.camera.top = 20
                dl.shadow.camera.bottom = -20
                dl.shadow.camera.updateProjectionMatrix()
            }

            dl.shadow.bias = config.shadowBias
            dl.shadow.normalBias = config.shadowNormalBias
            dl.shadow.radius = config.shadowSoftness ?? config.shadowRadius

            // Force update
            dl.shadow.updateMatrices(dl)
        }

        if (config.directionalTarget && dl.target) {
            dl.target.position.set(config.directionalTarget[0], config.directionalTarget[1], config.directionalTarget[2])
            dl.target.updateMatrixWorld()

            try {
                if (!scene.getObjectById(dl.target.id)) {
                    scene.add(dl.target)
                }
            } catch (e) {
                // already added
            }
        }

        // Schedule another update to ensure shadow maps are generated
        const timer = setTimeout(() => {
            if (dl.shadow) {
                dl.shadow.needsUpdate = true
            }
        }, 200)

        return () => clearTimeout(timer)
    }, [dirLightRef, config, scene, shadowUpdateFlag])

    // Additional frame-based shadow validation
    useFrame(() => {
        if (dirLightRef.current?.shadow) {
            // Ensure shadow matrices are updated
            dirLightRef.current.shadow.updateMatrices(dirLightRef.current)
        }
    })

    return (
        <>
            <ambientLight color={config.ambientColor} intensity={config.ambientIntensity * (1 - (config.shadowDarkness || 0))} />
            <hemisphereLight intensity={config.hemiIntensity * (1 - (config.shadowDarkness || 0))} />
            <directionalLight
                ref={dirLightRef}
                position={config.directionalPos}
                intensity={config.directionalIntensity}
                castShadow={config.shadowsEnabled}
                color={config.directionalColor}
                shadow-camera-far={50}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                shadow-mapSize-width={config.shadowResolution}
                shadow-mapSize-height={config.shadowResolution}
                shadow-bias={config.shadowBias}
                shadow-normalBias={config.shadowNormalBias}
                shadow-radius={config.shadowSoftness}
            />
            <pointLight position={[0, 10, 0]} intensity={config.fillIntensity} />
            <pointLight position={[-10, 5, 10]} intensity={0} distance={40} />

            <Suspense fallback={null}>
                <Model
                    url="/Outer.glb"
                    position={config.buildingPos}
                    rotation={config.buildingRot}
                    scale={config.buildingScale}
                    shadowsEnabled={config.shadowsEnabled}
                    modelRef={setBuilding}
                />
                <Environment preset={config.envValue as any} background={false} />
                <MovingCloud position={[-30, 33, -10]} speed={0.4} scale={[20, 10, 1]} color="#ffe4d1" />
                <MovingCloud position={[45, 35, -10]} speed={0.3} scale={[25, 12.5, 1]} color="#ffd1d1" />
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color="#c2c2c2ff" metalness={0} roughness={1} />
                </mesh>
            </Suspense>

            <OrbitControls
                ref={controlsRef}
                target={config.cameraTarget}
                enableDamping={false}
                dampingFactor={0.05}
                zoomSpeed={0.5}
            />
        </>
    )
}

export default function ProductionViewer() {
    const [key, setKey] = useState(0)

    // Force a complete re-render on mount to ensure consistent shadow initialization
    useEffect(() => {
        const timer = setTimeout(() => {
            setKey(prev => prev + 1)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            key={key}
            className="fixed top-0 left-0 w-full h-full overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url('/sun.jpg'), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect width='100%' height='100%' fill='%2316213e'/></svg>")`
            }}
        >
            <Canvas
                key={`canvas-${key}`}
                shadows
                camera={{
                    position: [13.2678760072932, 9.54023342452855, 64.77327507868063],
                    fov: 23
                }}
                onCreated={({ gl }) => {
                    gl.toneMappingExposure = 1.0
                    gl.shadowMap.enabled = true
                    gl.shadowMap.type = PCFSoftShadowMap
                    gl.shadowMap.autoUpdate = true
                    gl.shadowMap.needsUpdate = true

                    // Force an immediate render to initialize shadows
                    setTimeout(() => {
                        gl.shadowMap.needsUpdate = true
                    }, 50)
                }}
            >
                <Scene />
            </Canvas>
        </div>
    )
}

useGLTF.preload && useGLTF.preload('/Outer.glb')