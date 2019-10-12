import {
  Box,
  LinearProgress,
  Typography,
  Grid,
  makeStyles,
  createStyles
} from "@material-ui/core";
import PlaylistCard from "components/PlaylistCard";
import { Category as CategoryModel } from "models/category";
import { getNextOffset } from "models/paging";
import { PlaylistPaging } from "models/playlist";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchParameters, useFetch } from "utils/http";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const CategoryComp: React.FC = () => {
  const classes = useStyles();
  const { id: categoryId } = useParams();

  const [categoryRequest] = useState<FetchParameters>({
    api: "browse",
    endpoint: `categories/${categoryId}`,
    ignoreErrors: [404]
  });

  const [playlistsRequest, setPlaylistRequest] = useState<FetchParameters>({
    api: "browse",
    endpoint: `categories/${categoryId}/playlists`
  });

  const categoryResponse = useFetch<CategoryModel>(categoryRequest);
  const playlistsResponse = useFetch<PlaylistPaging>(playlistsRequest);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickLoadMore = (
    request: typeof playlistsRequest,
    response: typeof playlistsResponse
  ) => {
    const { query } = playlistsRequest;
    const offset = getNextOffset(request, response.data!.playlists);
    setPlaylistRequest({ ...playlistsRequest, query: { ...query, offset } });
  };

  if (categoryResponse.error || playlistsResponse.error) {
    // TODO error handling
    return <div>error :/</div>;
  }

  // don't show for subsequent playlistResponse pagination requests
  if (categoryResponse.pending || !playlistsResponse.data) {
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
          {categoryResponse.data!.name} playlists
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {playlistsResponse.data!.playlists.items.map(playlist => (
            <Grid item xs={6} sm={4} md={3} key={playlist.id}>
              <PlaylistCard playlist={playlist as any} />
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

export default CategoryComp;
