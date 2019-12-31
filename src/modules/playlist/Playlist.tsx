import React, { useEffect } from "react";
import { AppState } from "store";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylist } from "modules/playlist/store/actions";
import { LinearProgress } from "modules/shared/components/LinearProgress";
import { PageHeadline } from "modules/shared/components/PageHeadline";
import { Grid } from "@material-ui/core";
import { PlaylistSummary } from "modules/playlist/components/PlaylistSummary";
import { Tracks } from "modules/playlist/components/Tracks";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { playlist, playlistError, isPlaylistPending } = useSelector(
    ({ playlist }: AppState) => ({
      playlist: playlist.playlist,
      playlistError: playlist.playlistError,
      isPlaylistPending: playlist.isPlaylistPending
    }),
    shallowEqual
  );

  useEffect(() => {
    if (id) {
      dispatch(getPlaylist(id));
    }
  }, [id, dispatch]);

  if (playlistError) {
    // TODO error handling
    return <div>error :/</div>;
  }

  if (!playlist || isPlaylistPending) {
    return <LinearProgress />;
  }

  return (
    <React.Fragment>
      <PageHeadline title={playlist.name} subtitle="Popular playlists" />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <PlaylistSummary playlist={playlist} />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Tracks playlistTracks={playlist.tracks} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
