import React from "react";
import { Typography, Box } from "@material-ui/core";

interface Props {
  title: string;
  subtitle: string;
}

export const PageHeadline = ({ title, subtitle }: Props) => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>

      <Typography variant="subtitle1" component="h2" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  );
};
