import React from "react";
import { Typography, Box } from "@material-ui/core";

interface Props {
  title: string;
  subtitle: string;
}

export const PageHeadline = ({ title, subtitle }: Props) => {
  return (
    <Box my={3}>
      <Typography variant="h3" component="h1">
        {title}
      </Typography>

      <Typography variant="h6" component="h2">
        {subtitle}
      </Typography>
      <hr />
    </Box>
  );
};
