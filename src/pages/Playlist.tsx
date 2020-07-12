import React, { useEffect } from "react";
import { AppState } from "store";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  PlaylistSummary,
  PlaylistTrackList,
  PlaylistActions
} from "modules/playlist";
import { LinearProgress } from "modules/shared";
import { Grid, Box } from "@material-ui/core";
import { PlayerActions } from "modules/player";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { playlist, playlistError, isPlaylistLoading } = useSelector(
    ({ playlist }: AppState) => ({
      playlist: playlist.playlist,
      playlistError: playlist.playlistError,
      isPlaylistLoading: playlist.isPlaylistLoading
    }),
    shallowEqual
  );

  useEffect(() => {
    if (id) {
      dispatch(PlaylistActions.getPlaylist(id));
      dispatch(PlayerActions.getCurrentlyPlaying());
    }
  }, [id, dispatch]);

  if (playlistError) {
    // TODO error handling
    return <div>error :/</div>;
  }

  if (!playlist || isPlaylistLoading) {
    return <LinearProgress />;
  }

  return (
    <Box mt={3}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <PlaylistSummary playlist={playlist} />
        </Grid>

        <Grid item xs={12}>
          <PlaylistTrackList
            playlistTracks={playlist.tracks}
            playlistUri={playlist.uri}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
