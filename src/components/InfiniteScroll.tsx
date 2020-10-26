import { Box, LinearProgress, Typography } from "@material-ui/core";
import { useIntersectionObserver } from "hooks";
import React from "react";

interface Props {
  canFetchMore?: boolean;
  isFetching: boolean;
  fetchMore: () => void;
  children: React.ReactChild;
}

export const InfiniteScroll = ({
  canFetchMore,
  isFetching,
  fetchMore,
  children
}: Props) => {
  const infiniteScrollAnchor = React.useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: infiniteScrollAnchor,
    enabled: !!canFetchMore,
    onIntersect: fetchMore,
    rootMargin: "250px"
  });

  return (
    <>
      {children}

      {isFetching && (
        <Box my={4}>
          <LinearProgress />
        </Box>
      )}

      {canFetchMore === false && (
        <Box my={4} color="text.secondary" textAlign="center">
          <Typography variant="subtitle1">All items loaded.</Typography>
        </Box>
      )}

      <div ref={infiniteScrollAnchor} />
    </>
  );
};
