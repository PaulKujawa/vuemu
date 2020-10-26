import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

// see https://github.com/mui-org/material-ui/issues/16995
const borders = {
  border: 1,
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0
};

interface PageHeadlineProps {
  title: string;
  subtitle: string;
}

export const PageHeadline = ({ title, subtitle }: PageHeadlineProps) => {
  return (
    <Box {...borders} borderColor="grey.500" mb={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>

      <Typography variant="subtitle1" component="h2" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  );
};

export const PageHeadlineSkeleton = () => {
  return (
    <Box {...borders} borderColor="grey.500" mb={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        <Skeleton width={5 * 16} />
      </Typography>

      <Typography variant="subtitle1" component="h2" gutterBottom>
        <Skeleton width={12 * 16} />
      </Typography>
    </Box>
  );
};
