import { Billboard, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function MovingCloud({ position, speed, scale, color = "#ffa2a2ff" }: { position: [number, number, number], speed: number, scale: [number, number, number], color?: string }) {
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