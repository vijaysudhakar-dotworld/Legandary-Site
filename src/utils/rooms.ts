import type { RoomConfig } from "./useRoomZoom";

// Room configurations
export const rooms: RoomConfig[] = [
  {
    id: "room1",
    position: [0, 0, 0],
    normal: [1, 0, 0], //front view (pointer hidden)
    cameraTarget: {
      position: [-28.367398941091494, -30.631852070836473, 109.01291910860708],
      lookAt: [0, 0, 0],
      fov: 45,
    },
    label: "Room 1",
  },
  {
    id: "room2",
    position: [-140.01120452532077, 10.1359248303135, 340.7348020935059],
    normal: [0, 0, 1], //left view
    cameraTarget: {
      position: [-330.7947404076572, -5.300360572828991, 69.344377185744],
      lookAt: [0, 0, 0],
      fov: 32,
    },
    label: "Room 2",
  },
  // {
  //   id: "room3",
  //   position: [-230, 100, 50],
  //   normal: [-1, 0, 0], // back view
  //   cameraTarget: {
  //     position: [-101.21281823848838, 111.88363237252861, -31.363629962265172],
  //     lookAt: [0, 0, 0],
  //     fov: 54,
  //   },
  //   label: "Stairs",
  // },
  {
    id: "roomX",
    position: [-40, 22.80966317782812, 400], // 👈 pointer position
    normal: [1, 0, 0],
    cameraTarget: {
      position: [-464.4064848428473, -28.207659249320464, 124.86500075484041],
      lookAt: [-90, -20, 0],
      fov: 35,
    },
    label: "New Room",
  },
    {
    id: "stairs",
    position: [-100, 150, 60],
    normal: [-1, 0, 0], // back view
    cameraTarget: {
      position: [-125.52561827479624, 7.499168766774318, -350.81998316155824],
      lookAt: [0, 0, 0],
      fov: 20,
    },
    label: "Stairs",
  },
      {
    id: "Kitchen",
    position: [38.19346826809197, 220, 350],
    normal: [0, 0, 1], // left view
    cameraTarget: {
      position: [-304.7505359167327, 12.553975071981341, 137.63112950971686],
      lookAt: [0, 0, 0],
      fov: 60,
    },
    label: "Kitchen",
  },

];
