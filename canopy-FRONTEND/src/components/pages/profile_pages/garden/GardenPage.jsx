import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Typography,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  CircularProgress,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import FooterNav from "../../../Footer/FooterNav.jsx";

import { getAllTrees, getValidTreeYears } from "../../../../api/trees.js";

import GardenIsland from "./GardenIsland.jsx";
import ZoomedOutGarden from "./ZoomedOutGarden.jsx";

export default function GardenPage() {
  const [trees, setTrees] = useState([]);

  const [years, setYears] = useState([]);

  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  /*
    single = zoomed-in island
    grid = 4-island overview
  */
  const [viewMode, setViewMode] = useState("single");

  const [loading, setLoading] = useState(true);

  // replace with auth later
  const user_id = 1;

  useEffect(() => {
    async function loadData() {
      const treeData = await getAllTrees();

      const yearData = await getValidTreeYears();

      setTrees(treeData);

      setYears(yearData.map((y) => y.year));

      setLoading(false);
    }

    loadData();
  }, []);

  const selectedYear = years[selectedYearIndex];

  const treesForYear = useMemo(() => {
    return trees.filter((tree) => {
      const year = new Date(tree.date_earned).getFullYear();

      return year === selectedYear;
    });
  }, [trees, selectedYear]);

  function handlePreviousYear() {
    if (selectedYearIndex < years.length - 1) {
      setSelectedYearIndex(selectedYearIndex + 1);
    }
  }

  function handleNextYear() {
    if (selectedYearIndex > 0) {
      setSelectedYearIndex(selectedYearIndex - 1);
    }
  }

  if (loading) {
    return (
      <Box
        sx={{
          mt: 10,
          textAlign: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
      }}
    >
      {/* YEAR SELECTOR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <IconButton onClick={handlePreviousYear}>
          <ChevronLeftIcon />
        </IconButton>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          {selectedYear}
        </Typography>

        <IconButton onClick={handleNextYear}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* GARDEN */}
      {viewMode === "single" ? (
        <GardenIsland
          trees={treesForYear.slice(0, 4)}
          onDoubleClick={toggleViewMode}
        />
      ) : (
        <ZoomedOutGarden
          trees={treesForYear}
          onIslandDoubleClick={toggleViewMode}
        />
      )}
      <Box>
        <FooterNav />
      </Box>
    </Box>
  );
}
