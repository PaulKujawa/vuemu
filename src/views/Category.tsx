import {
  Box,
  LinearProgress,
  Typography,
  Grid,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { PlaylistCard } from "components/PlaylistCard";
// import { getNextOffset } from "models/paging";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AppState } from "store";
import { getCategory } from "store/category/actions";
import { getPlaylists } from "store/playlist/actions";

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

  const { playlists, playlistsError, arePlaylistsPending } = useSelector(
    ({ playlist }: AppState) => ({
      playlists: playlist.playlists,
      playlistsError: playlist.playlistsError,
      arePlaylistsPending: playlist.arePlaylistsPending
    }),
    shallowEqual
  );

  useEffect(() => {
    if (id) {
      dispatch(getCategory(id));
      dispatch(getPlaylists(id));
    }
  }, [id, dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const onClickLoadMore = (
  //   request: typeof playlistsRequest,
  //   response: typeof playlistsResponse
  // ) => {
  //   const { query } = playlistsRequest;
  //   const offset = getNextOffset(request, response.data!.playlists);
  //   setPlaylistRequest({ ...playlistsRequest, query: { ...query, offset } });
  // };

  if (categoryError || playlistsError) {
    // TODO error handling
    return <div>error :/</div>;
  }

  // TODO don't show for subsequent playlistResponse pagination requests
  if (
    !category ||
    isIsCategoryPending ||
    !playlists.length ||
    arePlaylistsPending
  ) {
    return (
      <Box mt={3}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <div>
      <Box my={3}>
        <Typography variant="h2" component="h1">
          {category!.name} playlists
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {playlists.map(playlist => (
            <Grid item xs={6} sm={4} md={3} key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </Grid>
          ))}
        </Grid>
      </div>

      {/* TODO would right now replace playlistResponse.data
      <Box my={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClickLoadMore(playlistsRequest, playlistsResponse)}
          disabled={isLastBatch(playlistsResponse.data.playlists)}
        >
          Load more
        </Button>
      </Box> */}
    </div>
  );
};
