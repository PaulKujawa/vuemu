import React from "react";
import { Typography, Box } from "@material-ui/core";

interface Props {
  title: string;
}

export const PageHeadline = ({ title }: Props) => {
  return (
    <Box my={3}>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
    </Box>
  );
};
