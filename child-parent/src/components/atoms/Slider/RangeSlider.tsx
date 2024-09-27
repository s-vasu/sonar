import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface RangeSliderProps {
  maxValue: number;
  curValue: number;
  val: number | number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
}

const StyledSlider = styled(Slider)`
  .MuiSlider-thumb {
    width: 23px !important; /* Adjust thumb radius as needed */
    height: 23px !important;
    background-color: #6c5dd3 !important; /* Change thumb color */
    border: 3px solid #b4a9ff !important; /* Add thumb border */
    border-radius: 8px;
  }

  /* Remove hovering styles */
  .MuiSlider-thumb:hover {
    box-shadow: none !important;
    border: 3px solid #b4a9ff !important; /* Add thumb border */
    border-radius: 8px;
  }
`;

export default function RangeSlider({
  maxValue,
  curValue,
  val,
  handleChange,
}: RangeSliderProps) {
  return (
    <Box sx={{}}>
      <StyledSlider
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={0}
        max={maxValue}
        onChange={handleChange}
        id="slider"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">
          <span id="purpletext">${curValue}</span> selected of
        </Typography>
        <Typography variant="body2">$ {maxValue}</Typography>
      </Box>
    </Box>
  );
}
