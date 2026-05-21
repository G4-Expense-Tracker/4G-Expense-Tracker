import { Box } from "@mui/material";
import Island from "./GardenIsland";

export default function ZoomedOutGarden({ trees, onIslandDoubleClick }) {
  const islands = [
    trees.slice(0, 4),
    trees.slice(4, 8),
    trees.slice(8, 12),
    trees.slice(12, 16),
  ];

  return (
    // <Box
    //   sx={{
    //     display: "grid",
    //     gridTemplateColumns: "repeat(2, auto)",
    //     justifyContent: "center",
    //     gap: 4,
    //     mt: 4,
    //   }}
    // >
    //   {islands.map((islandTrees, index) => (
    //     <Island
    //       key={index}
    //       trees={islandTrees}
    //       islandImage="/public/islands/Land_Small.png"
    //       scale={0.8}
    //     />
    //   ))}
    // </Box>
    <Box
      sx={{
        width: "100%",
        mt: 6,
      }}
    >
      {/* TOP */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: -8,
        }}
      >
        <GardenIsland
          trees={islands[0]}
          islandImage="/public/islands/Land_Small.png"
          scale={0.4}
          onDoubleClick={onIslandDoubleClick}
        />
      </Box>

      {/* MIDDLE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <GardenIsland
          trees={islands[1]}
          islandImage="/public/islands/Land_Small.png"
          scale={0.4}
          onDoubleClick={onIslandDoubleClick}
        />

        <GardenIsland
          trees={islands[2]}
          islandImage="/public/islands/Land_Small.png"
          scale={0.4}
          onDoubleClick={onIslandDoubleClick}
        />
      </Box>

      {/* BOTTOM */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: -8,
        }}
      >
        <GardenIsland
          trees={islands[3]}
          islandImage="/public/islands/Land_Small.png"
          scale={0.4}
          onDoubleClick={onIslandDoubleClick}
        />
      </Box>
    </Box>
  );
}
