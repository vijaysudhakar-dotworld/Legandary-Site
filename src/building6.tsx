import { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";

export const Building6 = forwardRef<Group, any>((props, ref) => {
  const { nodes, materials } = useGLTF("/building6.glb") as any;
  return (
    <group ref={ref} {...props} scale={[20, 20, 20]} dispose={null}>
      <group rotation={[0, 0, 0]}>
        <group position={[0, -5, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base.geometry}
            material={materials["Ground Plane"]}
            position={[0, 0.561, 0]}
            scale={-273.171}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_floor.geometry}
            material={materials["Parking floor"]}
            position={[-0.263, 0.458, -0.583]}
          >
            <group
              position={[0.479, 0.448, 7.286]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_0.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_0_1.geometry}
                material={materials["Black marble"]}
              />
            </group>
            <group
              position={[-0.589, 0.3, 7.504]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_5.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_5_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes._gltfNode_2.geometry}
              material={materials.Sofa}
              position={[0.597, 0.475, 8.507]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes._gltfNode_4.geometry}
              material={materials.Pillow}
              position={[1.12, 0.786, 8.616]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <group position={[-1.423, 0.527, 7.483]} rotation={[0, 1.567, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_3.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_3_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[1.958, 0.301, 7.545]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_4.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh_4_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube058.geometry}
              material={materials.rug}
              position={[0.29, 0.123, 7.675]}
            />
            <group
              position={[3.513, 1.397, 0.499]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube139_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube139_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.562, 1.397, 0.862]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube140_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube140_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.562, 1.397, 3.302]}
              rotation={[Math.PI, Math.PI / 2, 0]}
              scale={-1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube141_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube141_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.513, 1.397, 3.665]}
              rotation={[Math.PI, Math.PI / 2, 0]}
              scale={-1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube142_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube142_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.562, 1.397, 8.221]}
              rotation={[Math.PI, Math.PI / 2, 0]}
              scale={-1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube143_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube143_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.513, 1.397, 8.584]}
              rotation={[Math.PI, Math.PI / 2, 0]}
              scale={-1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube144_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube144_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.513, 1.397, 6.152]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube146_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube146_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[3.562, 1.397, 6.516]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube147_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube147_2.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR.geometry}
              material={materials["White wall"]}
              position={[-0.92, 1.14, 0.971]}
            />
            <group position={[-2.969, 1.902, 3.648]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube145_1.geometry}
                material={materials.concrete}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube145_2.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube145_3.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube145_4.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR002.geometry}
              material={materials.Bush}
              position={[-0.239, 1.06, -0.318]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR004.geometry}
              material={materials.concrete}
              position={[-0.238, 0.209, -0.372]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR005.geometry}
              material={materials["Outer wall"]}
              position={[-0.322, 0.371, 0.78]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR006.geometry}
              material={materials.Black}
              position={[0.563, 1.397, 9.808]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR007.geometry}
              material={materials.Black}
              position={[0.272, 1.397, 5.553]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR008.geometry}
              material={materials.Poster}
              position={[-1.044, 1.397, 4.149]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR009.geometry}
              material={materials["Floor tiles"]}
              position={[-0.435, 0, 4.324]}
            />
            <group position={[-2.503, 1.397, 0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube150_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube150_2.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR011.geometry}
              material={materials.Poster}
              position={[-3.371, 1.397, 8.517]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR012.geometry}
              material={materials.Poster}
              position={[-3.371, 1.397, 6.878]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR022.geometry}
              material={materials["White wall"]}
              position={[-3.058, 2.106, 0.5]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.Glass}
              position={[0.563, 1.397, 9.808]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.985, 1.251, 1.273]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials.Glass}
              position={[0.272, 1.397, 5.553]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.985, 1.251, 1.273]}
            />
          </mesh>
          <group position={[-3.103, 22.668, 5.642]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399.geometry}
              material={materials.concrete}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_1.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_2.geometry}
              material={materials["White wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_3.geometry}
              material={materials.Brown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_4.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_5.geometry}
              material={materials.Steel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_6.geometry}
              material={materials.Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2399_7.geometry}
              material={materials.Bush}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials.Brown}
              position={[8.333, 0.388, 3.733]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[1, 1, 1.827]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube247.geometry}
              material={materials.Glass}
              position={[-1.97, -10.033, -2.598]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube248.geometry}
              material={materials.Brown}
              position={[-2.511, -8.87, 1.568]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube249.geometry}
              material={materials.Brown}
              position={[-2.511, -11.728, -14.962]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube250.geometry}
              material={materials.Brown}
              position={[8.333, 0.388, -15.075]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={[1, 1, 1.827]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0011.geometry}
              material={materials.Plant}
              position={[-0.789, -0.359, 11.161]}
              rotation={[0, 1.571, 0]}
            />
          </group>
          <group position={[0.141, 3.368, 0.064]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube156_1.geometry}
              material={materials["Floor tiles"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube156_2.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube156_3.geometry}
              material={materials["White wall"]}
            />
            <group position={[-2.607, 1.734, 5.851]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_2.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials.Steel}
              position={[1.662, 1.178, 16.424]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group
              position={[4.402, 1.133, 12.602]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube039_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube039_2.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[-3.363, 0.675, 5.62]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube017_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube017_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005.geometry}
              material={materials.Steel}
              position={[2.552, 1.264, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.264, 0.614, -3.874]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007.geometry}
              material={nodes.Cube007.material}
              position={[-2.77, 0.517, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-4.23, 0.614, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009.geometry}
              material={materials.Black}
              position={[2.552, 1.293, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.333]}
            />
            <group
              position={[3.771, 1.133, 9.015]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube031_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube031_2.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[3.948, 2.22, 7.066]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube064_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube064_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube064_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials["Black marble"]}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube016.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube018.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube019.geometry}
              material={materials.Sofa}
              position={[3.647, 0.683, 5.35]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020.geometry}
              material={materials.Sofa}
              position={[3.45, 0.569, -6.762]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021.geometry}
              material={materials.Sofa}
              position={[3.433, 0.569, -3.402]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube022.geometry}
              material={materials["White marble"]}
              position={[3.435, 0.563, -5.085]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube023.geometry}
              material={materials.Pillow}
              position={[4.804, 0.932, -5.085]}
              rotation={[0, 0, -1.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube024.geometry}
              material={materials["Green cloth"]}
              position={[2.452, 0.529, -5.085]}
            />
            <group position={[0.3, 1.781, -7.777]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube101_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube101_2.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-3.46, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube327.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube327_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube327_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube327_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube027.geometry}
              material={materials["White marble"]}
              position={[0.457, 0.248, -7.741]}
            />
            <group
              position={[-3.653, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube331.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube331_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube331_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029.geometry}
              material={materials.Sofa}
              position={[3.272, 0.569, 1.623]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030.geometry}
              material={materials["White marble"]}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube032.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube033.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.47, 0.614, -2.935]}
            />
            <group
              position={[1.649, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube338.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube338_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube338_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube338_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-1.456, 1.859, -1.961]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube130_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube130_2.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube130_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube036.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-1.144, 1.145, -1.989]}
              rotation={[0, 1.571, 0]}
            />
            <group
              position={[1.456, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube339.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube339_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube339_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube038.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[1.645, 0.614, -16.215]}
            />
            <group
              position={[-0.222, 1.551, -5.881]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube029_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube029_2.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube029_3.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube029_4.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[-2.513, 0.764, -5.684]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube034_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube034_2.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube034_3.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[-3.997, 1.723, -8.113]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube040_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube040_2.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube040_3.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-2.468, 1.859, -10.1]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube043_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube043_2.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube043_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube043.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -9.788]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube044.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -9.903]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube045.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -16.215]}
            />
            <group position={[-2.468, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube078_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube078_2.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube078_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -16.1]}
            />
            <group position={[2.589, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube090_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube090_2.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube090_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube049.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[2.617, 1.145, -16.1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.333]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder002.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group position={[3.645, 2.346, 6.789]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder006_1.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder006_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005.geometry}
              material={materials.Black}
              position={[3.645, 2.757, 6.789]}
            />
            <group position={[-0.037, 1.558, 11.814]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube315.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube315_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube315_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1001.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group position={[0.087, 1.415, 8.757]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube289.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube289_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-3.641, 1.415, 7.944]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_1.geometry}
                material={materials.Glass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube026_2.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.724, 1.507, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1005.geometry}
              material={materials.Wood}
              position={[-0.724, 0.263, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-0.724, 2.752, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008_2.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-2.552, 1.347, 7.662]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010_2.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1008.geometry}
              material={materials.Wood}
              position={[-0.329, 1.507, 6.652]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1009.geometry}
              material={materials.Glass}
              position={[-1.398, 0.799, 17.116]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1010.geometry}
              material={materials.Glass}
              position={[0.785, 2.405, 16.393]}
            />
            <group position={[0.923, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube068_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube068_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[4.05, 1.415, 14.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011_2.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1014.geometry}
              material={materials.Glass}
              position={[0.995, 1.477, 1.742]}
            />
            <group position={[0.763, 3.199, 16.417]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube014_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube014_2.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1016.geometry}
              material={materials.Glass}
              position={[3.559, 1.723, 16.889]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1017.geometry}
              material={materials["White wall"]}
              position={[3.198, 3.162, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <group position={[-0.765, 0.943, 0.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube020_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube020_2.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube020_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[1.282, 0.837, 16.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube025_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube025_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube025_3.geometry}
                material={materials["White marble"]}
              />
            </group>
            <group
              position={[3.198, 0.285, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube028_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.684, 1.039, 14.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube032_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube032_2.geometry}
                material={materials["Black glass"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube032_3.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0.642, 2.827, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube035_1.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube035_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube035_3.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
            </group>
            <group position={[0.645, 0.74, 12.214]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube036_1.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube036_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube036_3.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.642, 1.33, 10.077]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube037_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube037_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube037_3.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[4.391, 0.75, 11.608]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube038_1.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube038_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube038_3.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube038_4.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube038_5.geometry}
                material={materials["Black glass"]}
              />
            </group>
            <group position={[4.936, 0.595, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube042_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube042_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.39, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube052_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube052_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.579, 2.723, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube044_1.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube044_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube044_3.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube044_4.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1030.geometry}
              material={materials.Glass}
              position={[4.927, 1.723, 11.572]}
            />
            <group position={[4.984, 2.677, 15.085]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube046_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube046_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[4.519, 2.991, 13.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube047_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube047_2.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube047_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[4.618, 2.991, 15.085]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube048_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube048_2.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube048_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.029, 13.602]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube049_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube049_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 1.196, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube051_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube051_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_3.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube053_4.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[2.552, 0.765, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube055_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.361, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube069_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube069_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube070_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube070_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.793, 1.723, 8.993]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1041.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.421, 11.572]}
              scale={[1, 0.034, 1]}
            />
            <group
              position={[5.039, 1.723, 8.718]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube041_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube041_2.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1043.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 8.456]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1044.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.132]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1045.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.656]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[3.76, 1.723, 3.941]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube079_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube079_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.039, 1.723, -1.468]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube080_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube080_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube081_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube081_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.923, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube082_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube082_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.361, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube083_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube083_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube084_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube084_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.369, 1.723, -5.126]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube100_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube100_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube100_3.geometry}
                material={materials.Display}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1053.geometry}
              material={materials.Pillow}
              position={[2.798, 0.883, -6.664]}
              rotation={[0, -0.859, -0.468]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1054.geometry}
              material={materials.Pillow}
              position={[3.972, 0.883, -6.765]}
              rotation={[0.468, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1055.geometry}
              material={materials.Sofa}
              position={[4.522, 0.912, -5.083]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1056.geometry}
              material={materials.Pillow}
              position={[4.084, 0.883, -3.499]}
              rotation={[-Math.PI, 0.859, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1057.geometry}
              material={materials.Pillow}
              position={[2.91, 0.883, -3.398]}
              rotation={[-0.468, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1058.geometry}
              material={materials.Pillow}
              position={[3.275, 0.883, 2.145]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1059.geometry}
              material={materials.Pillow}
              position={[3.174, 0.883, 0.971]}
              rotation={[Math.PI, -0.712, 2.674]}
            />
            <group position={[-0.53, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube127_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube127_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.656, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube126_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube126_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-4.828, 3.004, -5.282]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube322.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube322_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-5.312, 2.155, -4.549]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube134_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube134_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.51, -1.453]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube135_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube135_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.833, 1.723, -8.552]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube058_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube058_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.854, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube071_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube071_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube072_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube072_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[1.172, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube087_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube087_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube089_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube089_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[5.039, 1.723, -14.627]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube092_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube092_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.061, 1.723, -16.656]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube093_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube093_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[0.111, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube340.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube340_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-1.886, 1.415, -15.403]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube333.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube333_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-4.053, 0.77, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube155_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube155_2.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube155_3.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube157_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube157_2.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube157_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube158_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube158_2.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube158_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1086.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1087.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1088.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1089.geometry}
              material={materials["Outer wall"]}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1090.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1091.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1092.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1093.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1094.geometry}
              material={materials["White wall"]}
              position={[-2.978, 1.089, -13.576]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1095.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1096.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1097.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -4.362]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1098.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -1.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1099.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1100.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1101.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1102.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1103.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1104.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -14.149]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1105.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -11.523]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1106.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -9.658]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1107.geometry}
              material={materials.Glass}
              position={[-5.245, 1.568, 5.785]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1108.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1109.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1110.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1111.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group position={[0.96, 1.491, -1.31]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube185_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube185_2.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1113.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 13.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1114.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 10.722]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1115.geometry}
              material={materials["White marble"]}
              position={[0.202, 2.755, 13.256]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 0.034, 1]}
            />
            <group position={[0.642, 2.138, 12.209]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube288.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube288_1.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[0.087, 1.415, -2.19]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube186_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube186_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube187_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube187_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube188_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube188_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube189_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube189_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube190_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube190_2.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube190_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.106, 2.911, -2.161]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube191_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube191_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube192_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube192_2.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube192_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.724, 2.844, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube193_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube193_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-0.488, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube194_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube194_2.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.656, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube197_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube197_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.708, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube198_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube198_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[4.299, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube199_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube199_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[4.247, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube200_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube200_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-1.766, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube201_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube201_2.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube201_3.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1131.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -1.157]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1132.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -0.633]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-5.125, 1.735, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube206_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube206_2.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-0.132, 1.194, 11.791]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube302.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube302_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube302_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube302_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube302_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube302_5.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1135.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1136.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1137.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1138.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1139.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 3.678]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1140.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 4.202]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1141.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -2.254]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1142.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -1.73]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1143.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -8.269]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1144.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -7.745]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube294.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube294_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube294_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.533, 3.004, 14.793]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube295.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube295_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube295_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1147.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1148.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1149.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1150.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube225_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube225_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube225_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube226_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube226_2.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube226_3.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube226_4.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1153.geometry}
              material={materials["Floor tiles"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1154.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1155.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1156.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube231_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube231_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1158.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1159.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube234_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube234_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1161.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1162.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1163.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1164.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1165.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1166.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1167.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube242_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube242_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube243_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube243_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube244_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube244_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.804, 1.113, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube245_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube245_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube246_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube246_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube247_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube247_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube248_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube248_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-1.877, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube249_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube249_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.54, 1.347, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube250_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube250_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube296.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube296_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube252.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube252_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-4.464, 0.667, -2.63]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube313.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube313_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube313_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group
              position={[-2.148, 1.415, -1.36]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube308.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube308_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1181.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group
              position={[-2.455, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube325.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube325_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.828, 3.004, 12.077]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube300.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube300_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube300_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1184.geometry}
              material={materials["White wall"]}
              position={[-4.342, 1.507, 1.077]}
            />
            <group
              position={[3.158, 1.415, -15.37]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube342.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube342_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-1.897, 1.684, -16.09]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube334.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube334_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1187.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1188.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube263.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube263_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1190.geometry}
              material={materials.Bush}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1191.geometry}
              material={materials["White wall"]}
              position={[-3.913, 1.726, -1.371]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1192.geometry}
              material={materials.Wood}
              position={[-2.142, 2.918, -1.371]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube312.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube312_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-3.059, 1.415, -3.224]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube314.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube314_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1195.geometry}
              material={materials.curtain}
              position={[-4.726, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1196.geometry}
              material={materials.curtain}
              position={[-4.202, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-4.998, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube328.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube328_1.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube272.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube272_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube273.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube273_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube274.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube274_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube274_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1201.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube276.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube276_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube276_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1203.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -7.887]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1204.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -11.23]}
            />
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube335.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube335_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube336.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube336_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube336_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.3, 1.194, -13.285]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube337.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube337_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube337_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube337_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube337_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube337_5.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.18, 1.684, -16.073]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube343.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube343_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR013.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 5.5]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR014.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 7.185]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR015.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, -0.402]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR016.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 1.283]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR017.geometry}
              material={materials.Poster}
              position={[2.626, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR018.geometry}
              material={materials.Poster}
              position={[0.941, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR019.geometry}
              material={materials.Poster}
              position={[-2.388, 1.804, 8.868]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR020.geometry}
              material={materials.Poster}
              position={[-3.728, 1.804, 9.544]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <group position={[-3.373, 0.225, 3.001]} scale={[1, 1.141, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube303.geometry}
                material={materials.concrete}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube303_1.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube303_2.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube303_3.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.907, 1.215, -0.147]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube305.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube305_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR024.geometry}
              material={materials["White wall"]}
              position={[-3.462, 2.215, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR025.geometry}
              material={materials["White wall"]}
              position={[-3.921, 3.137, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR026.geometry}
              material={materials.Poster}
              position={[-3.437, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR027.geometry}
              material={materials.Poster}
              position={[1.647, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0.geometry}
              material={materials.Plant}
              position={[5.451, 1.169, 3.729]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0001.geometry}
              material={materials.Plant}
              position={[-0.734, 0.682, 16.74]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials.Glass}
              position={[-0.898, 1.507, 6.831]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials.rug}
              position={[3.435, 0.236, -5.085]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials.rug}
              position={[2.291, 0.236, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials.rug}
              position={[-3.364, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials.rug}
              position={[1.745, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials.rug}
              position={[-3.677, 0.236, 12.069]}
              scale={[1, 1, 0.804]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials.rug}
              position={[-2.527, 0.236, -5.973]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.219, 1, 0.781]}
            />
          </group>
          <group position={[0.141, 3.368, 0.064]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021_1.geometry}
              material={materials["Floor tiles"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021_2.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube021_3.geometry}
              material={materials["White wall"]}
            />
          </group>
          <group position={[0.141, 6.815, 0.064]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1605.geometry}
              material={materials["Floor tiles"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1605_1.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1605_2.geometry}
              material={materials["White wall"]}
            />
            <group position={[-2.607, 1.734, 5.851]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1343.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1343_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1343_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube051.geometry}
              material={materials.Steel}
              position={[1.662, 1.178, 16.424]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group
              position={[4.402, 1.133, 12.602]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1345.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1345_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[-3.363, 0.675, 5.62]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1346.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1346_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube054.geometry}
              material={materials.Steel}
              position={[2.552, 1.264, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube055.geometry}
              material={nodes.Cube055.material}
              position={[-2.77, 0.517, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube056.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-4.23, 0.614, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube057.geometry}
              material={materials.Black}
              position={[2.552, 1.293, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube059.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube060.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.333]}
            />
            <group
              position={[3.771, 1.133, 9.015]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1353.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1353_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[3.948, 2.22, 7.066]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1354.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1354_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1354_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube063.geometry}
              material={materials["Black marble"]}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube064.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube065.geometry}
              material={materials.Pillow}
              position={[4.804, 0.932, -5.085]}
              rotation={[0, 0, -1.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube066.geometry}
              material={materials["Green cloth"]}
              position={[2.452, 0.529, -5.085]}
            />
            <group position={[0.3, 1.781, -7.777]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1359.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1359_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube068.geometry}
              material={materials["White marble"]}
              position={[0.457, 0.248, -7.741]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube069.geometry}
              material={materials.Sofa}
              position={[3.272, 0.569, 1.623]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube070.geometry}
              material={materials["White marble"]}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube071.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube072.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.47, 0.614, -2.935]}
            />
            <group
              position={[-1.456, 1.859, -1.961]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1365.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1365_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1365_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube074.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-1.144, 1.145, -1.989]}
              rotation={[0, 1.571, 0]}
            />
            <group
              position={[-0.222, 1.551, -5.881]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1367.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1367_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1367_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1367_3.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[-2.513, 0.764, -5.684]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1368.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1368_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1368_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[-3.997, 1.723, -8.113]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1369.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1369_1.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1369_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-2.468, 1.859, -10.1]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1370.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1370_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1370_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube079.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -9.788]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube080.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -9.903]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube081.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -16.215]}
            />
            <group position={[-2.468, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1374.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1374_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1374_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube083.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -16.1]}
            />
            <group position={[2.589, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1376.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1376_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1376_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube085.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[2.617, 1.145, -16.1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube086.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube087.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube088.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube089.geometry}
              material={materials.Sofa}
              position={[3.647, 0.683, 5.35]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube090.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube091.geometry}
              material={materials.Sofa}
              position={[3.45, 0.569, -6.762]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube092.geometry}
              material={materials.Sofa}
              position={[3.433, 0.569, -3.402]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube093.geometry}
              material={materials["White marble"]}
              position={[3.435, 0.563, -5.085]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube094.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.264, 0.614, -3.874]}
            />
            <group
              position={[-3.46, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1587.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1587_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1587_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1587_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-3.653, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1591.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1591_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1591_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[1.649, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1598.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1598_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1598_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1598_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[1.456, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1599.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1599_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1599_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube099.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[1.645, 0.614, -16.215]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder006.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.333]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder008.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder009.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group position={[3.645, 2.346, 6.789]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder035.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder035_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011.geometry}
              material={materials.Black}
              position={[3.645, 2.757, 6.789]}
            />
            <group position={[-0.037, 1.558, 11.814]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1378.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1378_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1378_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1210.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group
              position={[-3.641, 1.415, 7.944]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1380.geometry}
                material={materials.Glass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1380_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.724, 1.507, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1381.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1381_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1213.geometry}
              material={materials.Wood}
              position={[-0.724, 0.263, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-0.724, 2.752, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1383.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1383_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-2.552, 1.347, 7.662]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1384.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1384_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1216.geometry}
              material={materials.Wood}
              position={[-0.329, 1.507, 6.652]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1217.geometry}
              material={materials.Glass}
              position={[-1.398, 0.799, 17.116]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1218.geometry}
              material={materials.Glass}
              position={[0.785, 2.405, 16.393]}
            />
            <group position={[0.923, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1388.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1388_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1389.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1389_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[4.05, 1.415, 14.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1390.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1390_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1222.geometry}
              material={materials.Glass}
              position={[0.995, 1.477, 1.742]}
            />
            <group position={[0.763, 3.199, 16.417]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1392.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1392_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1224.geometry}
              material={materials.Glass}
              position={[3.559, 1.723, 16.889]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1225.geometry}
              material={materials["White wall"]}
              position={[3.198, 3.162, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <group position={[-0.765, 0.943, 0.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1395.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1395_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1395_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[1.282, 0.837, 16.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1396.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1396_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1396_2.geometry}
                material={materials["White marble"]}
              />
            </group>
            <group
              position={[3.198, 0.285, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1397.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1397_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.684, 1.039, 14.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1398.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1398_1.geometry}
                material={materials["Black glass"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1398_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0.642, 2.827, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1399.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1399_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1399_2.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
            </group>
            <group position={[0.645, 0.74, 12.214]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1400.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1400_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1400_2.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.642, 1.33, 10.077]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1401.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1401_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1401_2.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[4.391, 0.75, 11.608]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1402.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1402_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1402_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1402_3.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1402_4.geometry}
                material={materials["Black glass"]}
              />
            </group>
            <group position={[4.936, 0.595, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1403.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1403_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.39, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1404.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1404_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.579, 2.723, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1405.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1405_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1405_2.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1405_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1237.geometry}
              material={materials.Glass}
              position={[4.927, 1.723, 11.572]}
            />
            <group position={[4.984, 2.677, 15.085]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1407.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1407_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[4.519, 2.991, 13.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1408.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1408_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1408_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[4.618, 2.991, 15.085]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1409.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1409_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1409_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.029, 13.602]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1410.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1410_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 1.196, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1411.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1411_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1412.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1412_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1412_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1412_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[2.552, 0.765, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1413.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1413_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.361, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1414.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1414_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1415.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1415_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.793, 1.723, 8.993]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1416.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1416_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[5.039, 1.723, 8.718]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1417.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1417_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1249.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 8.456]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1250.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.132]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1251.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.656]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[3.76, 1.723, 3.941]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1421.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1421_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.039, 1.723, -1.468]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1422.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1422_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1423.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1423_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.923, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1424.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1424_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.361, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1425.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1425_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1426.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1426_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.369, 1.723, -5.126]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1427.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1427_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1427_2.geometry}
                material={materials.Display}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1259.geometry}
              material={materials.Sofa}
              position={[4.522, 0.912, -5.083]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1260.geometry}
              material={materials.Pillow}
              position={[3.174, 0.883, 0.971]}
              rotation={[Math.PI, -0.712, 2.674]}
            />
            <group position={[-0.53, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1430.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1430_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.656, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1431.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1431_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.155, -4.549]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1432.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1432_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.51, -1.453]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1433.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1433_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.833, 1.723, -8.552]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1434.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1434_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.854, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1435.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1435_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1436.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1436_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[1.172, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1437.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1437_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1438.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1438_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[5.039, 1.723, -14.627]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1439.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1439_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.061, 1.723, -16.656]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1440.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1440_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-4.053, 0.77, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1441.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1441_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1441_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1442.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1442_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1442_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1443.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1443_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1443_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1275.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1276.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1277.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1278.geometry}
              material={materials["Outer wall"]}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1279.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1280.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1281.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1282.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1283.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1284.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1285.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1286.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1287.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1288.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1289.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1290.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -14.149]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1291.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -11.523]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1292.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -9.658]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1293.geometry}
              material={materials.Glass}
              position={[-5.245, 1.568, 5.785]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1294.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1295.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1296.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1297.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group position={[0.96, 1.491, -1.31]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1467.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1467_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-5.125, 1.735, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1468.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1468_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1300.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1301.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1302.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1303.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1304.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1305.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1306.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1307.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1477.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1477_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1477_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1478.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1478_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1478_2.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1478_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1310.geometry}
              material={materials["Floor tiles"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1311.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1312.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1313.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1483.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1483_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1315.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1316.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1486.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1486_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1318.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1319.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1320.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1321.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1322.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1323.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1324.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1494.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1494_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1495.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1495_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1496.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1496_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.804, 1.113, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1497.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1497_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1498.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1498_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1499.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1499_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1500.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1500_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-1.877, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1501.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1501_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.54, 1.347, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1502.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1502_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1503.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1503_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1335.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1336.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1506.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1506_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1338.geometry}
              material={materials.Bush}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1508.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1508_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1509.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1509_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1510.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1510_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1510_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1342.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1512.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1512_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1512_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1344.geometry}
              material={materials["White wall"]}
              position={[-2.978, 1.089, -13.576]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1345.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -4.362]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1346.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -1.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1347.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.421, 11.572]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1348.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 13.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1349.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 10.722]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1350.geometry}
              material={materials["White marble"]}
              position={[0.202, 2.755, 13.256]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 0.034, 1]}
            />
            <group position={[0.642, 2.138, 12.209]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1524.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1524_1.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[0.087, 1.415, 8.757]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1525.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1525_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1353.geometry}
              material={materials.Pillow}
              position={[3.275, 0.883, 2.145]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1354.geometry}
              material={materials.Pillow}
              position={[2.798, 0.883, -6.664]}
              rotation={[0, -0.859, -0.468]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1355.geometry}
              material={materials.Pillow}
              position={[3.972, 0.883, -6.765]}
              rotation={[0.468, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1356.geometry}
              material={materials.Pillow}
              position={[4.084, 0.883, -3.499]}
              rotation={[-Math.PI, 0.859, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1357.geometry}
              material={materials.Pillow}
              position={[2.91, 0.883, -3.398]}
              rotation={[-0.468, Math.PI / 2, 0]}
            />
            <group position={[0.087, 1.415, -2.19]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1539.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1539_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1540.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1540_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1541.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1541_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1542.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1542_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1543.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1543_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1543_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.106, 2.911, -2.161]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1544.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1544_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1545.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1545_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1545_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.724, 2.844, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1546.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1546_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-0.488, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1547.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1547_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.656, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1550.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1550_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.708, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1551.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1551_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[4.299, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1552.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1552_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[4.247, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1553.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1553_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-1.766, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1554.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1554_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1554_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1372.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -1.157]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1373.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -0.633]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1374.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 3.678]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1375.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 4.202]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1376.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -2.254]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1377.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -1.73]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1378.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -8.269]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1379.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -7.745]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1563.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1563_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1563_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.533, 3.004, 14.793]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1564.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1564_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1564_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1565.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1565_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1383.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group
              position={[-4.828, 3.004, 12.077]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1569.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1569_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1569_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.132, 1.194, 11.791]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1570.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1570_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1570_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1570_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1570_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1570_5.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1386.geometry}
              material={materials["White wall"]}
              position={[-4.342, 1.507, 1.077]}
            />
            <group
              position={[-2.148, 1.415, -1.36]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1575.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1575_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1388.geometry}
              material={materials["White wall"]}
              position={[-3.913, 1.726, -1.371]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1389.geometry}
              material={materials.Wood}
              position={[-2.142, 2.918, -1.371]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1579.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1579_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-4.464, 0.667, -2.63]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1580.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1580_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1580_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-3.059, 1.415, -3.224]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1581.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1581_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.828, 3.004, -5.282]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1583.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1583_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1394.geometry}
              material={materials.curtain}
              position={[-4.726, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1395.geometry}
              material={materials.curtain}
              position={[-4.202, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-2.455, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1586.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1586_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.998, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1588.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1588_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1398.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -7.887]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1399.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -11.23]}
            />
            <group
              position={[-1.886, 1.415, -15.403]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1593.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1593_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-1.897, 1.684, -16.09]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1594.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1594_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1595.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1595_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1596.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1596_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1596_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.3, 1.194, -13.285]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1597.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1597_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1597_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1597_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1597_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1597_5.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.111, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1600.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1600_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[3.158, 1.415, -15.37]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1602.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1602_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.18, 1.684, -16.073]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1603.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1603_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR028.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 5.5]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR029.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 7.185]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR030.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, -0.402]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR031.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 1.283]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR032.geometry}
              material={materials.Poster}
              position={[2.626, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR033.geometry}
              material={materials.Poster}
              position={[0.941, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR034.geometry}
              material={materials.Poster}
              position={[-2.388, 1.804, 8.868]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR035.geometry}
              material={materials.Poster}
              position={[-3.728, 1.804, 9.544]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <group position={[-3.373, 0.225, 3.001]} scale={[1, 1.141, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1571.geometry}
                material={materials.concrete}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1571_1.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1571_2.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1571_3.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.907, 1.215, -0.147]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1572.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1572_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR038.geometry}
              material={materials["White wall"]}
              position={[-3.462, 2.215, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR039.geometry}
              material={materials["White wall"]}
              position={[-3.921, 3.137, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR040.geometry}
              material={materials.Poster}
              position={[-3.437, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR041.geometry}
              material={materials.Poster}
              position={[1.647, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0002.geometry}
              material={materials.Plant}
              position={[5.451, 1.169, 3.729]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0003.geometry}
              material={materials.Plant}
              position={[-0.734, 0.682, 16.74]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials.Glass}
              position={[-0.898, 1.507, 6.831]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials.rug}
              position={[2.291, 0.236, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials.rug}
              position={[3.435, 0.236, -5.085]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012.geometry}
              material={materials.rug}
              position={[-3.677, 0.236, 12.069]}
              scale={[1, 1, 0.804]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials.rug}
              position={[-2.527, 0.236, -5.973]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.219, 1, 0.781]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane014.geometry}
              material={materials.rug}
              position={[-3.364, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane015.geometry}
              material={materials.rug}
              position={[1.745, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
          </group>
          <group position={[0.141, 10.261, 0.064]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1868.geometry}
              material={materials["Floor tiles"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1868_1.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1868_2.geometry}
              material={materials["White wall"]}
            />
            <group position={[-2.607, 1.734, 5.851]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1606.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1606_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1606_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube101.geometry}
              material={materials.Steel}
              position={[1.662, 1.178, 16.424]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group
              position={[4.402, 1.133, 12.602]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1608.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1608_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[-3.363, 0.675, 5.62]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1609.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1609_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube104.geometry}
              material={materials.Steel}
              position={[2.552, 1.264, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube105.geometry}
              material={nodes.Cube105.material}
              position={[-2.77, 0.517, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube106.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-4.23, 0.614, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube107.geometry}
              material={materials.Black}
              position={[2.552, 1.293, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube108.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube109.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.333]}
            />
            <group
              position={[3.771, 1.133, 9.015]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1616.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1616_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[3.948, 2.22, 7.066]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1617.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1617_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1617_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube112.geometry}
              material={materials["Black marble"]}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube113.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube114.geometry}
              material={materials.Pillow}
              position={[4.804, 0.932, -5.085]}
              rotation={[0, 0, -1.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube115.geometry}
              material={materials["Green cloth"]}
              position={[2.452, 0.529, -5.085]}
            />
            <group position={[0.3, 1.781, -7.777]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1622.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1622_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube117.geometry}
              material={materials["White marble"]}
              position={[0.457, 0.248, -7.741]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube118.geometry}
              material={materials.Sofa}
              position={[3.272, 0.569, 1.623]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube119.geometry}
              material={materials["White marble"]}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube120.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube121.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.47, 0.614, -2.935]}
            />
            <group
              position={[-1.456, 1.859, -1.961]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1628.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1628_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1628_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube123.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-1.144, 1.145, -1.989]}
              rotation={[0, 1.571, 0]}
            />
            <group
              position={[-0.222, 1.551, -5.881]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1630.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1630_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1630_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1630_3.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[-2.513, 0.764, -5.684]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1631.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1631_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1631_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[-3.997, 1.723, -8.113]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1632.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1632_1.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1632_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-2.468, 1.859, -10.1]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1633.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1633_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1633_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube128.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -9.788]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube129.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -9.903]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube130.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -16.215]}
            />
            <group position={[-2.468, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1637.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1637_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1637_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube132.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -16.1]}
            />
            <group position={[2.589, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1639.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1639_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1639_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube134.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[2.617, 1.145, -16.1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube135.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube136.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube137.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube138.geometry}
              material={materials.Sofa}
              position={[3.647, 0.683, 5.35]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube139.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube140.geometry}
              material={materials.Sofa}
              position={[3.45, 0.569, -6.762]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube141.geometry}
              material={materials.Sofa}
              position={[3.433, 0.569, -3.402]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube142.geometry}
              material={materials["White marble"]}
              position={[3.435, 0.563, -5.085]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube143.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.264, 0.614, -3.874]}
            />
            <group
              position={[-3.46, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1850.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1850_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1850_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1850_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-3.653, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1854.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1854_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1854_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[1.649, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1861.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1861_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1861_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1861_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[1.456, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1862.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1862_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1862_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube148.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[1.645, 0.614, -16.215]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder012.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder013.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.333]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder014.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder015.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group position={[3.645, 2.346, 6.789]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder041.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder041_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder017.geometry}
              material={materials.Black}
              position={[3.645, 2.757, 6.789]}
            />
            <group position={[-0.037, 1.558, 11.814]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1641.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1641_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1641_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1410.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group
              position={[-3.641, 1.415, 7.944]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1643.geometry}
                material={materials.Glass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1643_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.724, 1.507, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1644.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1644_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1413.geometry}
              material={materials.Wood}
              position={[-0.724, 0.263, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-0.724, 2.752, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1646.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1646_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-2.552, 1.347, 7.662]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1647.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1647_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1416.geometry}
              material={materials.Wood}
              position={[-0.329, 1.507, 6.652]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1417.geometry}
              material={materials.Glass}
              position={[-1.398, 0.799, 17.116]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1418.geometry}
              material={materials.Glass}
              position={[0.785, 2.405, 16.393]}
            />
            <group position={[0.923, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1651.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1651_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1652.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1652_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[4.05, 1.415, 14.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1653.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1653_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1422.geometry}
              material={materials.Glass}
              position={[0.995, 1.477, 1.742]}
            />
            <group position={[0.763, 3.199, 16.417]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1655.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1655_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1424.geometry}
              material={materials.Glass}
              position={[3.559, 1.723, 16.889]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1425.geometry}
              material={materials["White wall"]}
              position={[3.198, 3.162, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <group position={[-0.765, 0.943, 0.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1658.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1658_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1658_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[1.282, 0.837, 16.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1659.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1659_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1659_2.geometry}
                material={materials["White marble"]}
              />
            </group>
            <group
              position={[3.198, 0.285, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1660.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1660_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.684, 1.039, 14.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1661.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1661_1.geometry}
                material={materials["Black glass"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1661_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0.642, 2.827, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1662.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1662_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1662_2.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
            </group>
            <group position={[0.645, 0.74, 12.214]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1663.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1663_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1663_2.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.642, 1.33, 10.077]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1664.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1664_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1664_2.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[4.391, 0.75, 11.608]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1665.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1665_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1665_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1665_3.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1665_4.geometry}
                material={materials["Black glass"]}
              />
            </group>
            <group position={[4.936, 0.595, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1666.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1666_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.39, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1667.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1667_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.579, 2.723, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1668.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1668_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1668_2.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1668_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1437.geometry}
              material={materials.Glass}
              position={[4.927, 1.723, 11.572]}
            />
            <group position={[4.984, 2.677, 15.085]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1670.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1670_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[4.519, 2.991, 13.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1671.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1671_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1671_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[4.618, 2.991, 15.085]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1672.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1672_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1672_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.029, 13.602]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1673.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1673_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 1.196, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1674.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1674_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1675.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1675_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1675_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1675_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[2.552, 0.765, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1676.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1676_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.361, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1677.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1677_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1678.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1678_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.793, 1.723, 8.993]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1679.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1679_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[5.039, 1.723, 8.718]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1680.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1680_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1449.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 8.456]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1450.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.132]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1451.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.656]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[3.76, 1.723, 3.941]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1684.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1684_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.039, 1.723, -1.468]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1685.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1685_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1686.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1686_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.923, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1687.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1687_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.361, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1688.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1688_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1689.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1689_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.369, 1.723, -5.126]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1690.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1690_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1690_2.geometry}
                material={materials.Display}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1459.geometry}
              material={materials.Sofa}
              position={[4.522, 0.912, -5.083]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1460.geometry}
              material={materials.Pillow}
              position={[3.174, 0.883, 0.971]}
              rotation={[Math.PI, -0.712, 2.674]}
            />
            <group position={[-0.53, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1693.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1693_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.656, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1694.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1694_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.155, -4.549]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1695.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1695_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.51, -1.453]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1696.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1696_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.833, 1.723, -8.552]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1697.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1697_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.854, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1698.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1698_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1699.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1699_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[1.172, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1700.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1700_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1701.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1701_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[5.039, 1.723, -14.627]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1702.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1702_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.061, 1.723, -16.656]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1703.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1703_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-4.053, 0.77, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1704.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1704_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1704_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1705.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1705_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1705_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1706.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1706_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1706_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1475.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1476.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1477.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1478.geometry}
              material={materials["Outer wall"]}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1479.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1480.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1481.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1482.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1483.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1484.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1485.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1486.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1487.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1488.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1489.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1490.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -14.149]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1491.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -11.523]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1492.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -9.658]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1493.geometry}
              material={materials.Glass}
              position={[-5.245, 1.568, 5.785]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1494.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1495.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1496.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1497.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group position={[0.96, 1.491, -1.31]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1730.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1730_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-5.125, 1.735, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1731.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1731_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1500.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1501.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1502.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1503.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1504.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1505.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1506.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1507.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1740.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1740_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1740_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1741.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1741_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1741_2.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1741_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1510.geometry}
              material={materials["Floor tiles"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1511.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1512.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1513.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1746.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1746_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1515.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1516.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1749.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1749_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1518.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1519.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1520.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1521.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1522.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1523.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1524.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1757.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1757_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1758.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1758_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1759.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1759_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.804, 1.113, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1760.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1760_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1761.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1761_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1762.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1762_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1763.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1763_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-1.877, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1764.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1764_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.54, 1.347, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1765.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1765_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1766.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1766_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1535.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1536.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1769.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1769_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1538.geometry}
              material={materials.Bush}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1771.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1771_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1772.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1772_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1773.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1773_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1773_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1542.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1775.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1775_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1775_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1544.geometry}
              material={materials["White wall"]}
              position={[-2.978, 1.089, -13.576]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1545.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -4.362]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1546.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -1.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1547.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.421, 11.572]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1548.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 13.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1549.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 10.722]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1550.geometry}
              material={materials["White marble"]}
              position={[0.202, 2.755, 13.256]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 0.034, 1]}
            />
            <group position={[0.642, 2.138, 12.209]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1787.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1787_1.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[0.087, 1.415, 8.757]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1788.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1788_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1553.geometry}
              material={materials.Pillow}
              position={[3.275, 0.883, 2.145]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1554.geometry}
              material={materials.Pillow}
              position={[2.798, 0.883, -6.664]}
              rotation={[0, -0.859, -0.468]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1555.geometry}
              material={materials.Pillow}
              position={[3.972, 0.883, -6.765]}
              rotation={[0.468, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1556.geometry}
              material={materials.Pillow}
              position={[4.084, 0.883, -3.499]}
              rotation={[-Math.PI, 0.859, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1557.geometry}
              material={materials.Pillow}
              position={[2.91, 0.883, -3.398]}
              rotation={[-0.468, Math.PI / 2, 0]}
            />
            <group position={[0.087, 1.415, -2.19]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1802.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1802_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1803.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1803_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1804.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1804_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1805.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1805_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1806.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1806_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1806_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.106, 2.911, -2.161]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1807.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1807_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1808.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1808_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1808_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.724, 2.844, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1809.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1809_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-0.488, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1810.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1810_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.656, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1813.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1813_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.708, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1814.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1814_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[4.299, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1815.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1815_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[4.247, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1816.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1816_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-1.766, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1817.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1817_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1817_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1572.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -1.157]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1573.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -0.633]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1574.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 3.678]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1575.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 4.202]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1576.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -2.254]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1577.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -1.73]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1578.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -8.269]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1579.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -7.745]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1826.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1826_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1826_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.533, 3.004, 14.793]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1827.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1827_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1827_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1828.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1828_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1583.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group
              position={[-4.828, 3.004, 12.077]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1832.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1832_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1832_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.132, 1.194, 11.791]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1833.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1833_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1833_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1833_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1833_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1833_5.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1586.geometry}
              material={materials["White wall"]}
              position={[-4.342, 1.507, 1.077]}
            />
            <group
              position={[-2.148, 1.415, -1.36]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1838.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1838_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1588.geometry}
              material={materials["White wall"]}
              position={[-3.913, 1.726, -1.371]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1589.geometry}
              material={materials.Wood}
              position={[-2.142, 2.918, -1.371]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1842.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1842_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-4.464, 0.667, -2.63]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1843.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1843_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1843_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-3.059, 1.415, -3.224]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1844.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1844_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.828, 3.004, -5.282]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1846.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1846_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1594.geometry}
              material={materials.curtain}
              position={[-4.726, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1595.geometry}
              material={materials.curtain}
              position={[-4.202, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-2.455, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1849.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1849_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.998, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1851.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1851_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1598.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -7.887]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1599.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -11.23]}
            />
            <group
              position={[-1.886, 1.415, -15.403]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1856.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1856_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-1.897, 1.684, -16.09]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1857.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1857_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1858.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1858_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1859.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1859_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1859_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.3, 1.194, -13.285]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1860.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1860_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1860_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1860_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1860_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1860_5.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.111, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1863.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1863_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[3.158, 1.415, -15.37]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1865.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1865_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.18, 1.684, -16.073]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1866.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1866_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR042.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 5.5]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR043.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 7.185]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR044.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, -0.402]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR045.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 1.283]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR046.geometry}
              material={materials.Poster}
              position={[2.626, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR047.geometry}
              material={materials.Poster}
              position={[0.941, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR048.geometry}
              material={materials.Poster}
              position={[-2.388, 1.804, 8.868]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR049.geometry}
              material={materials.Poster}
              position={[-3.728, 1.804, 9.544]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <group position={[-3.373, 0.225, 3.001]} scale={[1, 1.141, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1834.geometry}
                material={materials.concrete}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1834_1.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1834_2.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1834_3.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.907, 1.215, -0.147]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1835.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1835_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR052.geometry}
              material={materials["White wall"]}
              position={[-3.462, 2.215, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR053.geometry}
              material={materials["White wall"]}
              position={[-3.921, 3.137, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR054.geometry}
              material={materials.Poster}
              position={[-3.437, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR055.geometry}
              material={materials.Poster}
              position={[1.647, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0004.geometry}
              material={materials.Plant}
              position={[5.451, 1.169, 3.729]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0005.geometry}
              material={materials.Plant}
              position={[-0.734, 0.682, 16.74]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials.Glass}
              position={[-0.898, 1.507, 6.831]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane017.geometry}
              material={materials.rug}
              position={[2.291, 0.236, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane018.geometry}
              material={materials.rug}
              position={[3.435, 0.236, -5.085]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane019.geometry}
              material={materials.rug}
              position={[-3.677, 0.236, 12.069]}
              scale={[1, 1, 0.804]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane020.geometry}
              material={materials.rug}
              position={[-2.527, 0.236, -5.973]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.219, 1, 0.781]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane021.geometry}
              material={materials.rug}
              position={[-3.364, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane022.geometry}
              material={materials.rug}
              position={[1.745, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
          </group>
          <group position={[0.141, 13.708, 0.064]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2131.geometry}
              material={materials["Floor tiles"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2131_1.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2131_2.geometry}
              material={materials["White wall"]}
            />
            <group position={[-2.607, 1.734, 5.851]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1869.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1869_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1869_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube150.geometry}
              material={materials.Steel}
              position={[1.662, 1.178, 16.424]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group
              position={[4.402, 1.133, 12.602]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1871.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1871_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[-3.363, 0.675, 5.62]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1872.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1872_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube153.geometry}
              material={materials.Steel}
              position={[2.552, 1.264, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube154.geometry}
              material={nodes.Cube154.material}
              position={[-2.77, 0.517, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube155.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-4.23, 0.614, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube156.geometry}
              material={materials.Black}
              position={[2.552, 1.293, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube157.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube158.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.333]}
            />
            <group
              position={[3.771, 1.133, 9.015]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1879.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1879_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[3.948, 2.22, 7.066]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1880.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1880_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1880_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube161.geometry}
              material={materials["Black marble"]}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube162.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube163.geometry}
              material={materials.Pillow}
              position={[4.804, 0.932, -5.085]}
              rotation={[0, 0, -1.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube164.geometry}
              material={materials["Green cloth"]}
              position={[2.452, 0.529, -5.085]}
            />
            <group position={[0.3, 1.781, -7.777]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1885.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1885_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube166.geometry}
              material={materials["White marble"]}
              position={[0.457, 0.248, -7.741]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube167.geometry}
              material={materials.Sofa}
              position={[3.272, 0.569, 1.623]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube168.geometry}
              material={materials["White marble"]}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube169.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube170.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.47, 0.614, -2.935]}
            />
            <group
              position={[-1.456, 1.859, -1.961]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1891.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1891_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1891_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube172.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-1.144, 1.145, -1.989]}
              rotation={[0, 1.571, 0]}
            />
            <group
              position={[-0.222, 1.551, -5.881]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1893.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1893_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1893_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1893_3.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[-2.513, 0.764, -5.684]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1894.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1894_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1894_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[-3.997, 1.723, -8.113]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1895.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1895_1.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1895_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-2.468, 1.859, -10.1]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1896.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1896_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1896_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube177.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -9.788]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube178.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -9.903]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube179.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -16.215]}
            />
            <group position={[-2.468, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1900.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1900_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1900_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube181.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -16.1]}
            />
            <group position={[2.589, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1902.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1902_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1902_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube183.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[2.617, 1.145, -16.1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube184.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube185.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube186.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube187.geometry}
              material={materials.Sofa}
              position={[3.647, 0.683, 5.35]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube188.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube189.geometry}
              material={materials.Sofa}
              position={[3.45, 0.569, -6.762]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube190.geometry}
              material={materials.Sofa}
              position={[3.433, 0.569, -3.402]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube191.geometry}
              material={materials["White marble"]}
              position={[3.435, 0.563, -5.085]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube192.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.264, 0.614, -3.874]}
            />
            <group
              position={[-3.46, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2113.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2113_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2113_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2113_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-3.653, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2117.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2117_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2117_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[1.649, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2124.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2124_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2124_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2124_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[1.456, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2125.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2125_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2125_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube197.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[1.645, 0.614, -16.215]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder018.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder019.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.333]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder020.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder021.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group position={[3.645, 2.346, 6.789]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder047.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder047_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder023.geometry}
              material={materials.Black}
              position={[3.645, 2.757, 6.789]}
            />
            <group position={[-0.037, 1.558, 11.814]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1904.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1904_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1904_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1610.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group
              position={[-3.641, 1.415, 7.944]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1906.geometry}
                material={materials.Glass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1906_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.724, 1.507, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1907.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1907_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1613.geometry}
              material={materials.Wood}
              position={[-0.724, 0.263, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-0.724, 2.752, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1909.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1909_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-2.552, 1.347, 7.662]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1910.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1910_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1616.geometry}
              material={materials.Wood}
              position={[-0.329, 1.507, 6.652]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1617.geometry}
              material={materials.Glass}
              position={[-1.398, 0.799, 17.116]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1618.geometry}
              material={materials.Glass}
              position={[0.785, 2.405, 16.393]}
            />
            <group position={[0.923, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1914.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1914_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1915.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1915_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[4.05, 1.415, 14.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1916.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1916_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1622.geometry}
              material={materials.Glass}
              position={[0.995, 1.477, 1.742]}
            />
            <group position={[0.763, 3.199, 16.417]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1918.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1918_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1624.geometry}
              material={materials.Glass}
              position={[3.559, 1.723, 16.889]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1625.geometry}
              material={materials["White wall"]}
              position={[3.198, 3.162, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <group position={[-0.765, 0.943, 0.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1921.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1921_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1921_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[1.282, 0.837, 16.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1922.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1922_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1922_2.geometry}
                material={materials["White marble"]}
              />
            </group>
            <group
              position={[3.198, 0.285, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1923.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1923_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.684, 1.039, 14.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1924.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1924_1.geometry}
                material={materials["Black glass"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1924_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0.642, 2.827, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1925.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1925_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1925_2.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
            </group>
            <group position={[0.645, 0.74, 12.214]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1926.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1926_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1926_2.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.642, 1.33, 10.077]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1927.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1927_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1927_2.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[4.391, 0.75, 11.608]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1928.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1928_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1928_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1928_3.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1928_4.geometry}
                material={materials["Black glass"]}
              />
            </group>
            <group position={[4.936, 0.595, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1929.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1929_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.39, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1930.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1930_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.579, 2.723, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1931.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1931_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1931_2.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1931_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1637.geometry}
              material={materials.Glass}
              position={[4.927, 1.723, 11.572]}
            />
            <group position={[4.984, 2.677, 15.085]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1933.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1933_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[4.519, 2.991, 13.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1934.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1934_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1934_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[4.618, 2.991, 15.085]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1935.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1935_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1935_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.029, 13.602]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1936.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1936_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 1.196, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1937.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1937_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1938.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1938_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1938_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1938_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[2.552, 0.765, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1939.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1939_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.361, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1940.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1940_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1941.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1941_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.793, 1.723, 8.993]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1942.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1942_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[5.039, 1.723, 8.718]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1943.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1943_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1649.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 8.456]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1650.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.132]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1651.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.656]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[3.76, 1.723, 3.941]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1947.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1947_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.039, 1.723, -1.468]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1948.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1948_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1949.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1949_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.923, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1950.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1950_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.361, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1951.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1951_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1952.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1952_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.369, 1.723, -5.126]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1953.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1953_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1953_2.geometry}
                material={materials.Display}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1659.geometry}
              material={materials.Sofa}
              position={[4.522, 0.912, -5.083]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1660.geometry}
              material={materials.Pillow}
              position={[3.174, 0.883, 0.971]}
              rotation={[Math.PI, -0.712, 2.674]}
            />
            <group position={[-0.53, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1956.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1956_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.656, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1957.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1957_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.155, -4.549]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1958.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1958_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.51, -1.453]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1959.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1959_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.833, 1.723, -8.552]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1960.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1960_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.854, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1961.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1961_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1962.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1962_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[1.172, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1963.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1963_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1964.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1964_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[5.039, 1.723, -14.627]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1965.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1965_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.061, 1.723, -16.656]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1966.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1966_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-4.053, 0.77, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1967.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1967_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1967_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1968.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1968_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1968_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1969.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1969_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1969_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1675.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1676.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1677.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1678.geometry}
              material={materials["Outer wall"]}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1679.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1680.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1681.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1682.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1683.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1684.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1685.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1686.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1687.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1688.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1689.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1690.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -14.149]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1691.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -11.523]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1692.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -9.658]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1693.geometry}
              material={materials.Glass}
              position={[-5.245, 1.568, 5.785]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1694.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1695.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1696.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1697.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group position={[0.96, 1.491, -1.31]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1993.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1993_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-5.125, 1.735, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1994.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube1994_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1700.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1701.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1702.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1703.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1704.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1705.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1706.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1707.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2003.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2003_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2003_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2004.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2004_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2004_2.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2004_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1710.geometry}
              material={materials["Floor tiles"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1711.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1712.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1713.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2009.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2009_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1715.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1716.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2012.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2012_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1718.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1719.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1720.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1721.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1722.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1723.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1724.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2020.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2020_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2021.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2021_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2022.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2022_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.804, 1.113, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2023.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2023_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2024.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2024_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2025.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2025_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2026.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2026_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-1.877, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2027.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2027_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.54, 1.347, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2028.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2028_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2029.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2029_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1735.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1736.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2032.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2032_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1738.geometry}
              material={materials.Bush}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2034.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2034_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2035.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2035_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2036.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2036_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2036_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1742.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2038.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2038_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2038_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1744.geometry}
              material={materials["White wall"]}
              position={[-2.978, 1.089, -13.576]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1745.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -4.362]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1746.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.899, -1.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1747.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.421, 11.572]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1748.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 13.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1749.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 10.722]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1750.geometry}
              material={materials["White marble"]}
              position={[0.202, 2.755, 13.256]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 0.034, 1]}
            />
            <group position={[0.642, 2.138, 12.209]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2050.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2050_1.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[0.087, 1.415, 8.757]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2051.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2051_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1753.geometry}
              material={materials.Pillow}
              position={[3.275, 0.883, 2.145]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1754.geometry}
              material={materials.Pillow}
              position={[2.798, 0.883, -6.664]}
              rotation={[0, -0.859, -0.468]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1755.geometry}
              material={materials.Pillow}
              position={[3.972, 0.883, -6.765]}
              rotation={[0.468, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1756.geometry}
              material={materials.Pillow}
              position={[4.084, 0.883, -3.499]}
              rotation={[-Math.PI, 0.859, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1757.geometry}
              material={materials.Pillow}
              position={[2.91, 0.883, -3.398]}
              rotation={[-0.468, Math.PI / 2, 0]}
            />
            <group position={[0.087, 1.415, -2.19]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2065.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2065_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2066.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2066_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2067.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2067_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2068.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2068_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2069.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2069_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2069_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.106, 2.911, -2.161]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2070.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2070_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2071.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2071_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2071_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.724, 2.844, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2072.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2072_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-0.488, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2073.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2073_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.656, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2076.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2076_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.708, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2077.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2077_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[4.299, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2078.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2078_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[4.247, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2079.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2079_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-1.766, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2080.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2080_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2080_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1772.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -1.157]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1773.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -0.633]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1774.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 3.678]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1775.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 4.202]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1776.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -2.254]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1777.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -1.73]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1778.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -8.269]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1779.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -7.745]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2089.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2089_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2089_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.533, 3.004, 14.793]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2090.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2090_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2090_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2091.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2091_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1783.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group
              position={[-4.828, 3.004, 12.077]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2095.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2095_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2095_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.132, 1.194, 11.791]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2096.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2096_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2096_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2096_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2096_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2096_5.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1786.geometry}
              material={materials["White wall"]}
              position={[-4.342, 1.507, 1.077]}
            />
            <group
              position={[-2.148, 1.415, -1.36]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2101.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2101_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1788.geometry}
              material={materials["White wall"]}
              position={[-3.913, 1.726, -1.371]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1789.geometry}
              material={materials.Wood}
              position={[-2.142, 2.918, -1.371]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2105.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2105_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-4.464, 0.667, -2.63]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2106.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2106_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2106_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-3.059, 1.415, -3.224]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2107.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2107_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.828, 3.004, -5.282]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2109.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2109_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1794.geometry}
              material={materials.curtain}
              position={[-4.726, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1795.geometry}
              material={materials.curtain}
              position={[-4.202, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-2.455, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2112.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2112_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.998, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2114.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2114_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1798.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -7.887]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1799.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -11.23]}
            />
            <group
              position={[-1.886, 1.415, -15.403]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2119.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2119_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-1.897, 1.684, -16.09]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2120.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2120_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2121.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2121_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2122.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2122_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2122_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.3, 1.194, -13.285]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2123.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2123_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2123_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2123_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2123_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2123_5.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.111, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2126.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2126_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[3.158, 1.415, -15.37]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2128.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2128_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.18, 1.684, -16.073]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2129.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2129_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR056.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 5.5]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR057.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 7.185]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR058.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, -0.402]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR059.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 1.283]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR060.geometry}
              material={materials.Poster}
              position={[2.626, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR061.geometry}
              material={materials.Poster}
              position={[0.941, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR062.geometry}
              material={materials.Poster}
              position={[-2.388, 1.804, 8.868]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR063.geometry}
              material={materials.Poster}
              position={[-3.728, 1.804, 9.544]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <group position={[-3.373, 0.225, 3.001]} scale={[1, 1.141, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2097.geometry}
                material={materials.concrete}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2097_1.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2097_2.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2097_3.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.907, 1.215, -0.147]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2098.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2098_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR066.geometry}
              material={materials["White wall"]}
              position={[-3.462, 2.215, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR067.geometry}
              material={materials["White wall"]}
              position={[-3.921, 3.137, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR068.geometry}
              material={materials.Poster}
              position={[-3.437, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR069.geometry}
              material={materials.Poster}
              position={[1.647, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0006.geometry}
              material={materials.Plant}
              position={[5.451, 1.169, 3.729]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0007.geometry}
              material={materials.Plant}
              position={[-0.734, 0.682, 16.74]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane023.geometry}
              material={materials.Glass}
              position={[-0.898, 1.507, 6.831]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials.rug}
              position={[2.291, 0.236, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane025.geometry}
              material={materials.rug}
              position={[3.435, 0.236, -5.085]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane026.geometry}
              material={materials.rug}
              position={[-3.677, 0.236, 12.069]}
              scale={[1, 1, 0.804]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane027.geometry}
              material={materials.rug}
              position={[-2.527, 0.236, -5.973]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.219, 1, 0.781]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane028.geometry}
              material={materials.rug}
              position={[-3.364, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane029.geometry}
              material={materials.rug}
              position={[1.745, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
          </group>
          <group position={[0.141, 17.154, 0.064]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2394.geometry}
              material={materials["Floor tiles"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2394_1.geometry}
              material={materials["Outer wall"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2394_2.geometry}
              material={materials["White wall"]}
            />
            <group position={[-2.607, 1.734, 5.851]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2132.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2132_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2132_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube199.geometry}
              material={materials.Steel}
              position={[1.662, 1.178, 16.424]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group
              position={[4.402, 1.133, 12.602]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2134.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2134_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[-3.363, 0.675, 5.62]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2135.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2135_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube202.geometry}
              material={materials.Steel}
              position={[2.552, 1.264, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube203.geometry}
              material={nodes.Cube203.material}
              position={[-2.77, 0.517, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube204.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-4.23, 0.614, 5.297]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube205.geometry}
              material={materials.Black}
              position={[2.552, 1.293, 11.572]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube206.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube207.geometry}
              material={materials.Black}
              position={[2.552, 1.288, 11.333]}
            />
            <group
              position={[3.771, 1.133, 9.015]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2142.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2142_1.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[3.948, 2.22, 7.066]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2143.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2143_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2143_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube210.geometry}
              material={materials["Black marble"]}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube211.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube212.geometry}
              material={materials.Pillow}
              position={[4.804, 0.932, -5.085]}
              rotation={[0, 0, -1.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube213.geometry}
              material={materials["Green cloth"]}
              position={[2.452, 0.529, -5.085]}
            />
            <group position={[0.3, 1.781, -7.777]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2148.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2148_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube215.geometry}
              material={materials["White marble"]}
              position={[0.457, 0.248, -7.741]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube216.geometry}
              material={materials.Sofa}
              position={[3.272, 0.569, 1.623]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube217.geometry}
              material={materials["White marble"]}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube218.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube219.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.47, 0.614, -2.935]}
            />
            <group
              position={[-1.456, 1.859, -1.961]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2154.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2154_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2154_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube221.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-1.144, 1.145, -1.989]}
              rotation={[0, 1.571, 0]}
            />
            <group
              position={[-0.222, 1.551, -5.881]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2156.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2156_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2156_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2156_3.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[-2.513, 0.764, -5.684]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2157.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2157_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2157_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[-3.997, 1.723, -8.113]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2158.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2158_1.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2158_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-2.468, 1.859, -10.1]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2159.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2159_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2159_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube226.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -9.788]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube227.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -9.903]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube228.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-3.335, 0.614, -16.215]}
            />
            <group position={[-2.468, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2163.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2163_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2163_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube230.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.44, 1.145, -16.1]}
            />
            <group position={[2.589, 1.859, -16.412]} rotation={[0, 1.571, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2165.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2165_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2165_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube232.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[2.617, 1.145, -16.1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube233.geometry}
              material={materials.Sofa}
              position={[2.844, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube234.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 7.148]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube235.geometry}
              material={materials.Sofa}
              position={[4.46, 0.683, 6.458]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube236.geometry}
              material={materials.Sofa}
              position={[3.647, 0.683, 5.35]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube237.geometry}
              material={materials.Sofa}
              position={[1.836, 0.563, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube238.geometry}
              material={materials.Sofa}
              position={[3.45, 0.569, -6.762]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube239.geometry}
              material={materials.Sofa}
              position={[3.433, 0.569, -3.402]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube240.geometry}
              material={materials["White marble"]}
              position={[3.435, 0.563, -5.085]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube241.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-2.264, 0.614, -3.874]}
            />
            <group
              position={[-3.46, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2376.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2376_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2376_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2376_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-3.653, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2380.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2380_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2380_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <group
              position={[1.649, 1.551, -10.526]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2387.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2387_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2387_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2387_3.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[1.456, 0.764, -12.751]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2388.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2388_1.geometry}
                material={materials.Sofa}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2388_2.geometry}
                material={materials.Pillow}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube246.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[1.645, 0.614, -16.215]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder024.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.812]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder025.geometry}
              material={materials.Steel}
              position={[2.552, 2.547, 11.333]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder026.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder027.geometry}
              material={materials.Black}
              position={[3.645, 1.232, 6.789]}
              rotation={[Math.PI, 0, Math.PI]}
            />
            <group position={[3.645, 2.346, 6.789]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder053.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder053_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder029.geometry}
              material={materials.Black}
              position={[3.645, 2.757, 6.789]}
            />
            <group
              position={[-1.886, 1.415, -15.403]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2382.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2382_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-1.897, 1.684, -16.09]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2383.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2383_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2384.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2384_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2385.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2385_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2385_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.3, 1.194, -13.285]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2386.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2386_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2386_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2386_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2386_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2386_5.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.111, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2389.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2389_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[3.158, 1.415, -15.37]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2391.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2391_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.18, 1.684, -16.073]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2392.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2392_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_11009.geometry}
              material={materials["White wall"]}
              position={[-5.531, 2.753, -8.834]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={-1}
            />
            <group position={[-0.037, 1.558, 11.814]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2167.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2167_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2167_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1810.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group
              position={[-3.641, 1.415, 7.944]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2169.geometry}
                material={materials.Glass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2169_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.724, 1.507, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2170.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2170_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1813.geometry}
              material={materials.Wood}
              position={[-0.724, 0.263, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-0.724, 2.752, 4.809]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2172.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2172_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[-2.552, 1.347, 7.662]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2173.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2173_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1816.geometry}
              material={materials.Wood}
              position={[-0.329, 1.507, 6.652]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1817.geometry}
              material={materials.Glass}
              position={[-1.398, 0.799, 17.116]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1818.geometry}
              material={materials.Glass}
              position={[0.785, 2.405, 16.393]}
            />
            <group position={[0.923, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2177.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2177_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2178.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2178_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[4.05, 1.415, 14.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2179.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2179_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1822.geometry}
              material={materials.Glass}
              position={[0.995, 1.477, 1.742]}
            />
            <group position={[0.763, 3.199, 16.417]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2181.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2181_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1824.geometry}
              material={materials.Glass}
              position={[3.559, 1.723, 16.889]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1825.geometry}
              material={materials["White wall"]}
              position={[3.198, 3.162, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <group position={[-0.765, 0.943, 0.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2184.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2184_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2184_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[1.282, 0.837, 16.408]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2185.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2185_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2185_2.geometry}
                material={materials["White marble"]}
              />
            </group>
            <group
              position={[3.198, 0.285, 17.062]}
              rotation={[0, 0, -Math.PI / 2]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2186.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2186_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.684, 1.039, 14.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2187.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2187_1.geometry}
                material={materials["Black glass"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2187_2.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0.642, 2.827, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2188.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2188_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2188_2.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
            </group>
            <group position={[0.645, 0.74, 12.214]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2189.geometry}
                material={materials["Grey plastic"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2189_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2189_2.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[0.642, 1.33, 10.077]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2190.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2190_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2190_2.geometry}
                material={materials.Steel}
              />
            </group>
            <group position={[4.391, 0.75, 11.608]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2191.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2191_1.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2191_2.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2191_3.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2191_4.geometry}
                material={materials["Black glass"]}
              />
            </group>
            <group position={[4.936, 0.595, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2192.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2192_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.39, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2193.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2193_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.579, 2.723, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2194.geometry}
                material={materials["GREY PLASTIC"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2194_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2194_2.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2194_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1837.geometry}
              material={materials.Glass}
              position={[4.927, 1.723, 11.572]}
            />
            <group position={[4.984, 2.677, 15.085]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2196.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2196_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[4.519, 2.991, 13.808]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2197.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2197_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2197_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[4.618, 2.991, 15.085]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2198.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2198_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2198_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.029, 13.602]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2199.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2199_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 1.196, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2200.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2200_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2201.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2201_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2201_2.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2201_3.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[2.552, 0.765, 11.572]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2202.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2202_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[3.361, 1.723, 4.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2203.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2203_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, 4.442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2204.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2204_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.793, 1.723, 8.993]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2205.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2205_1.geometry}
                material={materials.Light}
              />
            </group>
            <group
              position={[5.039, 1.723, 8.718]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2206.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2206_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1849.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 8.456]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1850.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.132]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1851.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, 5.656]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[3.76, 1.723, 3.941]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2210.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2210_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.039, 1.723, -1.468]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2211.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2211_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.56, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2212.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2212_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.923, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2213.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2213_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[3.361, 1.723, -1.44]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2214.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2214_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[2.986, 1.723, -1.49]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2215.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2215_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[0.369, 1.723, -5.126]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2216.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2216_1.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2216_2.geometry}
                material={materials.Display}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1859.geometry}
              material={materials.Sofa}
              position={[4.522, 0.912, -5.083]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1860.geometry}
              material={materials.Pillow}
              position={[3.174, 0.883, 0.971]}
              rotation={[Math.PI, -0.712, 2.674]}
            />
            <group position={[-0.53, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2219.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2219_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.656, 1.333, 15.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2220.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2220_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.155, -4.549]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2221.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2221_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-5.312, 2.51, -1.453]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2222.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2222_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.833, 1.723, -8.552]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2223.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2223_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[-3.854, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2224.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2224_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.997, 1.751, -14.96]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2225.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2225_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[1.172, 1.723, -14.861]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2226.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2226_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2227.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2227_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[5.039, 1.723, -14.627]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2228.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2228_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group
              position={[5.061, 1.723, -16.656]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2229.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2229_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-4.053, 0.77, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2230.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2230_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2230_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2231.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2231_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2231_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2232.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2232_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2232_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1875.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1876.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1877.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1878.geometry}
              material={materials["Outer wall"]}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1879.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1880.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1881.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1882.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1883.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1884.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1885.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1886.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1887.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1888.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1889.geometry}
              material={materials.Glass}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1890.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -14.149]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1891.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -11.523]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1892.geometry}
              material={materials.Glass}
              position={[-5.245, 1.901, -9.658]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1893.geometry}
              material={materials.Glass}
              position={[-5.245, 1.568, 5.785]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1894.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1895.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1896.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1897.geometry}
              material={materials.Black}
              position={[0.96, 1.491, -1.31]}
            />
            <group position={[0.96, 1.491, -1.31]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2256.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2256_1.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-5.125, 1.735, 12.069]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2257.geometry}
                material={materials.Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2257_1.geometry}
                material={materials.Glass}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1900.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1901.geometry}
              material={materials.curtain}
              position={[0.96, 1.491, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1902.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1903.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1904.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1905.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.31]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1906.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -1.512]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1907.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-2.978, 1.089, -13.576]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2266.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2266_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2266_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2267.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2267_1.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2267_2.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2267_3.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1910.geometry}
              material={materials["Floor tiles"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1911.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1912.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1913.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2272.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2272_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1915.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1916.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2275.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2275_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1918.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1919.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1920.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1921.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1922.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.095, -7.982]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1923.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.095, -10.775]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1924.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2283.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2283_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2284.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2284_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2285.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2285_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.804, 1.113, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2286.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2286_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2287.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2287_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2288.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2288_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2289.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2289_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-1.877, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2290.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2290_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.54, 1.347, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2291.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2291_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2292.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2292_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1935.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1936.geometry}
              material={materials["WHITE PLASTIC.001"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2295.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2295_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1938.geometry}
              material={materials.Bush}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2297.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2297_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2298.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2298_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2299.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2299_1.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2299_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1942.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group position={[4.936, 2.991, 9.504]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2301.geometry}
                material={materials["Outer wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2301_1.geometry}
                material={materials["1Indoor wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2301_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1944.geometry}
              material={materials["White wall"]}
              position={[-5.532, 1.095, -16.343]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1945.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.095, -4.362]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1946.geometry}
              material={materials["White wall"]}
              position={[-5.547, 1.095, -1.178]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1947.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.421, 11.572]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1948.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 13.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1949.geometry}
              material={materials["White marble"]}
              position={[0.642, 2.755, 10.722]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.034, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1950.geometry}
              material={materials["White marble"]}
              position={[0.202, 2.755, 13.256]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 0.034, 1]}
            />
            <group position={[0.642, 2.138, 12.209]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2313.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2313_1.geometry}
                material={materials.Light}
              />
            </group>
            <group position={[0.087, 1.415, 8.757]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2314.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2314_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1953.geometry}
              material={materials.Pillow}
              position={[3.275, 0.883, 2.145]}
              rotation={[Math.PI, 0, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1954.geometry}
              material={materials.Pillow}
              position={[2.798, 0.883, -6.664]}
              rotation={[0, -0.859, -0.468]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1955.geometry}
              material={materials.Pillow}
              position={[3.972, 0.883, -6.765]}
              rotation={[0.468, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1956.geometry}
              material={materials.Pillow}
              position={[4.084, 0.883, -3.499]}
              rotation={[-Math.PI, 0.859, 2.674]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1957.geometry}
              material={materials.Pillow}
              position={[2.91, 0.883, -3.398]}
              rotation={[-0.468, Math.PI / 2, 0]}
            />
            <group position={[0.087, 1.415, -2.19]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2328.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2328_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2329.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2329_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2330.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2330_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2331.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2331_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2332.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2332_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2332_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[0.106, 2.911, -2.161]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2333.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2333_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2334.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2334_1.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2334_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.724, 2.844, 2.305]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2335.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2335_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-0.488, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2336.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2336_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-0.656, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2339.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2339_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[-0.708, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2340.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2340_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group
              position={[4.299, 1.415, -10.193]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2341.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2341_1.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[4.247, 2.844, -10.198]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2342.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2342_1.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-1.766, 1.684, -9.334]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2343.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2343_1.geometry}
                material={materials.MIRROR}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2343_2.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1972.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -1.157]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1973.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, -0.633]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1974.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 3.678]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1975.geometry}
              material={materials.curtain}
              position={[3.683, 1.507, 4.202]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1976.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -2.254]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1977.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -1.73]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1978.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -8.269]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1979.geometry}
              material={materials.curtain}
              position={[4.76, 1.507, -7.745]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2352.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2352_1.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2352_2.geometry}
                material={materials["White wall"]}
              />
            </group>
            <group position={[-2.533, 3.004, 14.793]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2353.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2353_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2353_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2354.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2354_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1983.geometry}
              material={materials["White wall"]}
              position={[-0.925, 0.978, 0.394]}
            />
            <group
              position={[-4.828, 3.004, 12.077]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2358.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2358_1.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2358_2.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group position={[-0.132, 1.194, 11.791]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2359.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2359_1.geometry}
                material={materials["WHITE PLASTIC.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2359_2.geometry}
                material={materials["White marble"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2359_3.geometry}
                material={materials.Display}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2359_4.geometry}
                material={materials.Light}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2359_5.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1986.geometry}
              material={materials["White wall"]}
              position={[-4.342, 1.507, 1.077]}
            />
            <group
              position={[-2.148, 1.415, -1.36]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2364.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2364_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1988.geometry}
              material={materials["White wall"]}
              position={[-3.913, 1.726, -1.371]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1989.geometry}
              material={materials.Wood}
              position={[-2.142, 2.918, -1.371]}
            />
            <group position={[-0.925, 0.978, 0.394]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2368.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2368_1.geometry}
                material={materials["1Indoor wall"]}
              />
            </group>
            <group
              position={[-4.464, 0.667, -2.63]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2369.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2369_1.geometry}
                material={materials.Pillow}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2369_2.geometry}
                material={materials.Sofa}
              />
            </group>
            <group position={[-3.059, 1.415, -3.224]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2370.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2370_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.828, 3.004, -5.282]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2372.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2372_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1994.geometry}
              material={materials.curtain}
              position={[-4.726, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1995.geometry}
              material={materials.curtain}
              position={[-4.202, 1.507, -4.302]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <group
              position={[-2.455, 1.415, -8.481]}
              rotation={[0, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2375.geometry}
                material={materials.Wood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2375_1.geometry}
                material={materials.Black}
              />
            </group>
            <group
              position={[-4.998, 3.004, -12.902]}
              rotation={[0, -Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2377.geometry}
                material={materials["White wall"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2377_1.geometry}
                material={materials.Light}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1998.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -7.887]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor_1999.geometry}
              material={materials.curtain}
              position={[0.96, 1.059, -11.23]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR070.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 5.5]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR071.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 7.185]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR072.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, -0.402]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR073.geometry}
              material={materials.Poster}
              position={[0.212, 1.804, 1.283]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR074.geometry}
              material={materials.Poster}
              position={[2.626, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR075.geometry}
              material={materials.Poster}
              position={[0.941, 1.804, -10.092]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR076.geometry}
              material={materials.Poster}
              position={[-2.388, 1.804, 8.868]}
              rotation={[-Math.PI, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR077.geometry}
              material={materials.Poster}
              position={[-3.728, 1.804, 9.544]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <group position={[-3.373, 0.225, 3.001]} scale={[1, 1.141, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2360.geometry}
                material={materials.concrete}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2360_1.geometry}
                material={materials["Floor tiles"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2360_2.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2360_3.geometry}
                material={materials.Glass}
              />
            </group>
            <group position={[-2.907, 1.215, -0.147]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2361.geometry}
                material={materials.Steel}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube2361_1.geometry}
                material={materials.Black}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR080.geometry}
              material={materials["White wall"]}
              position={[-3.462, 2.215, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR081.geometry}
              material={materials["White wall"]}
              position={[-3.921, 3.137, -0.147]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR082.geometry}
              material={materials.Poster}
              position={[-3.437, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.GROUND_FLOOR083.geometry}
              material={materials.Poster}
              position={[1.647, 1.804, -14.672]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0008.geometry}
              material={materials.Plant}
              position={[5.451, 1.169, 3.729]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.leaves_Leaves_0002_Leaves_0009.geometry}
              material={materials.Plant}
              position={[-0.734, 0.682, 16.74]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane030.geometry}
              material={materials.Glass}
              position={[-0.898, 1.507, 6.831]}
              rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane031.geometry}
              material={materials.rug}
              position={[2.291, 0.236, 1.642]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane032.geometry}
              material={materials.rug}
              position={[3.435, 0.236, -5.085]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane033.geometry}
              material={materials.rug}
              position={[-3.677, 0.236, 12.069]}
              scale={[1, 1, 0.804]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane034.geometry}
              material={materials.rug}
              position={[-2.527, 0.236, -5.973]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[1.219, 1, 0.781]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane035.geometry}
              material={materials.rug}
              position={[-3.364, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane036.geometry}
              material={materials.rug}
              position={[1.745, 0.236, -12.765]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.219, 1, 0.71]}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/building6.glb");
