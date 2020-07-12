import { Grid, makeStyles, createStyles, Box } from "@material-ui/core";
import { PlaylistCard, CategoryActions } from "modules/category";
import {
  NoContentPlaceholder,
  getNextBatchOffset,
  hasNextBatch,
  LinearProgress,
  PageHeadline
} from "modules/shared";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppState } from "store";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

export const Category = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { category, categoryError, isIsCategoryPending } = useSelector(
    ({ category }: AppState) => ({
      category: category.category,
      categoryError: category.categoryError,
      isIsCategoryPending: category.isCategoryPending
    }),
    shallowEqual
  );

  const { playlists, playlistsError, playlistsPagination } = useSelector(
    ({ category }: AppState) => ({
      playlists: category.playlists,
      playlistsError: category.playlistsError,
      playlistsPagination: category.playlistsPagination
    }),
    shallowEqual
  );

  useEffect(() => {
    if (id) {
      dispatch(CategoryActions.getCategory(id));
    }
  }, [id, dispatch]);

  if (categoryError || playlistsError) {
    // TODO error handling
    return <div>error :/</div>;
  }

  if (!category || isIsCategoryPending) {
    return <LinearProgress />;
  }

  const loadPlaylists = () =>
    dispatch(
      CategoryActions.getPlaylists(id!, getNextBatchOffset(playlistsPagination))
    );

  return (
    <Box mt={3}>
      <PageHeadline title={category.name} subtitle="Popular playlists" />

      <InfiniteScroll
        loadMore={loadPlaylists}
        hasMore={hasNextBatch(playlistsPagination)}
        loader={<LinearProgress key={0} />}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            {playlists.map(playlist => (
              <Grid item xs={12} sm={4} md={3} key={playlist.id}>
                <PlaylistCard playlist={playlist} />
              </Grid>
            ))}
          </Grid>

          {!playlists.length && (
            <NoContentPlaceholder message="This category has no playlists." />
          )}
        </div>
      </InfiniteScroll>
    </Box>
  );
};
