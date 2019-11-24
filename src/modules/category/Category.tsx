import { Grid, makeStyles, createStyles } from "@material-ui/core";
import { PlaylistCard } from "modules/category/components/PlaylistCard";
import { getCategory, getPlaylists } from "modules/category/store/actions";
import { LinearProgress } from "modules/shared/components/LinearProgress";
import { PageHeadline } from "modules/shared/components/PageHeadline";
import { nextBatchOffset, nextBatchExists } from "modules/shared/utils/paging";
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

  const { playlists, playlistsError, pagination } = useSelector(
    ({ category }: AppState) => ({
      playlists: category.playlists,
      playlistsError: category.playlistsError,
      pagination: category.playlistsPagination
    }),
    shallowEqual
  );

  useEffect(() => {
    if (id) {
      dispatch(getCategory(id));
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
    dispatch(getPlaylists(id!, nextBatchOffset(pagination)));

  return (
    <React.Fragment>
      <PageHeadline title={`${category!.name} playlists`} />

      <InfiniteScroll
        pageStart={0}
        loadMore={loadPlaylists}
        hasMore={nextBatchExists(pagination)}
        loader={<LinearProgress key={0} />}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            {playlists.map(playlist => (
              <Grid item xs={6} sm={4} md={3} key={playlist.id}>
                <PlaylistCard playlist={playlist} />
              </Grid>
            ))}
          </Grid>
        </div>
      </InfiniteScroll>
    </React.Fragment>
  );
};
