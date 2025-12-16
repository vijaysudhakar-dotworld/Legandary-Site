// ./helper/ClickPositionHelper.tsx
import { useThree } from "@react-three/fiber";
import { useEffect, useState, useMemo } from "react";
import * as THREE from "three";

type ClickPositionHelperProps = {
  controlsRef?: React.MutableRefObject<any | null>;
  buildingRef?: React.MutableRefObject<THREE.Group | null>;
};

export default function ClickPositionHelper({
  controlsRef,
  buildingRef,
}: ClickPositionHelperProps) {
  const { scene, camera, gl } = useThree();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const [debugPos, setDebugPos] = useState<[number, number, number] | null>(
    null
  );

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const rect = gl.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(scene, true);

      if (intersects.length === 0) return;

      // 1) world position where you clicked
      const worldPoint = intersects[0].point.clone();
      const worldPos: [number, number, number] = [
        worldPoint.x,
        worldPoint.y,
        worldPoint.z,
      ];
      setDebugPos(worldPos); // red sphere in the scene

      // 2) convert to LOCAL space of <Center> (buildingRef)
      let localPos: [number, number, number] = worldPos;
      if (buildingRef?.current) {
        const localPoint = worldPoint.clone();
        buildingRef.current.worldToLocal(localPoint);
        localPos = [localPoint.x, localPoint.y, localPoint.z];
      }

      // 3) camera state (world)
      const cam = camera as THREE.PerspectiveCamera;
      const camPos: [number, number, number] = [
        cam.position.x,
        cam.position.y,
        cam.position.z,
      ];
      const fov = cam.fov;

      let targetArr: [number, number, number] = [-90, -20, 0];
      if (controlsRef?.current?.target) {
        const t = controlsRef.current.target as THREE.Vector3;
        targetArr = [t.x, t.y, t.z];
      }

      console.log("🌍 World click position:", worldPos);
      console.log(
        "📦 Local pointer position (use THIS for room.position):",
        localPos
      );
      console.log("📷 Camera position:", camPos);
      console.log("🎯 LookAt target:", targetArr);
      console.log("👁️ FOV:", fov);

      console.log("%cRoomConfig snippet:", "color:#4ade80;font-weight:bold;");
      console.log(`{
  id: "roomX",
  position: [${localPos.join(", ")}], // 👈 pointer position
  normal: [1, 0, 0],
  cameraTarget: {
    position: [${camPos.join(", ")}],
    lookAt: [${targetArr.join(", ")}],
    fov: ${fov},
  },
  label: "New Room",
}`);
    }

    gl.domElement.addEventListener("click", handleClick);
    return () => gl.domElement.removeEventListener("click", handleClick);
  }, [camera, gl, raycaster, scene, controlsRef, buildingRef]);

  if (!debugPos) return null;

  // Red sphere at the world click point (just for visual debugging)
  return (
    <mesh position={debugPos}>
      <sphereGeometry args={[10, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
