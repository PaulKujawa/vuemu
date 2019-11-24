import React from "react";
import { Box, LinearProgress as MuiLinearProgress } from "@material-ui/core";

export const LinearProgress = () => {
  return (
    <Box my={3}>
      <MuiLinearProgress color="secondary" />
    </Box>
  );
};
