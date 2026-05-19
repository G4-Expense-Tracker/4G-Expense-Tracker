import { useState } from "react";
import { Box } from "@mui/material";

export default function Tree({ tree, position }) {
  const [animating, setAnimating] = useState(false);

  function handleClick() {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }, 2000);
  }

  const imageSource = animating
    ? `/public/animated/tree${tree.type_id}.png`
    : `/public/trees/tree${tree.type_id}.png`;

  return (
    <Box
      component="img"
      src={imageSource}
      alt="tree"
      onClick={handleClick}
      sx={{
        width: 90,
        position: "absolute",
        cursor: "pointer",
        userSelect: "none",
        ...position,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
