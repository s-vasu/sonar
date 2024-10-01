import { Box } from "@mui/material";
import React from "react";

interface SummaryTemplateProps {
  children?: React.ReactNode;
}

export default function SummaryTemplate({ children }: SummaryTemplateProps) {
  return <Box>{children}</Box>; // Corrected to render the actual children
}
