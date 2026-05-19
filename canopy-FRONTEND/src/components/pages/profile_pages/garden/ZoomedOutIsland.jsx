import { Box } from "@mui/material";
import Island from "./Island";

export default function ZoomedOutGarden({ trees }) {
  const islands = [
    trees.slice(0, 4),
    trees.slice(4, 8),
    trees.slice(8, 12),
    trees.slice(12, 16),
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        justifyContent: "center",
        gap: 4,
        mt: 4,
      }}
    >
      {islands.map((islandTrees, index) => (
        <Island
          key={index}
          trees={islandTrees}
          islandImage="/public/islands/Land_Small.png"
          scale={0.8}
        />
      ))}
    </Box>
  );
}
