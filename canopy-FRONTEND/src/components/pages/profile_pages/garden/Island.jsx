import { Box } from "@mui/material";
import Tree from "./Tree";

const positions = [
  { top: "22%", left: "50%" }, // top
  { top: "50%", left: "28%" }, // left
  { top: "50%", left: "72%" }, // right
  { top: "78%", left: "50%" }, // bottom
];

export default function GardenIsland({
  trees,
  islandImage = "/public/islands/Land_Big.png",
  scale = 1,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        width: 700 * scale,
        height: 550 * scale,
      }}
    >
      <Box
        component="img"
        src={islandImage}
        alt="island"
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {trees.slice(0, 4).map((tree, index) => (
        <Tree
          key={tree.tree_id}
          tree={tree}
          position={positions[index]}
          scale={scale}
        />
      ))}
    </Box>
  );
}
