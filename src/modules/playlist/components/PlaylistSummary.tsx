import React from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { ImageWithPlaceholder, stripHtmlTags } from "modules/shared";
import { PlaylistFull } from "values";
import { useDispatch } from "react-redux";
import { PlayerActions } from "modules/player";

interface Props {
  playlist: PlaylistFull;
}

export const PlaylistSummary = ({ playlist }: Props) => {
  const dispatch = useDispatch();

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <ImageWithPlaceholder
          url={playlist.images[0].url}
          alt={playlist.name}
        />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="overline" component="h2">
          Playlist
        </Typography>

        <Typography variant="h3" component="h1" gutterBottom>
          {playlist.name}
        </Typography>

        {playlist.description && (
          <Typography variant="subtitle1">
            {stripHtmlTags(playlist.description)}
          </Typography>
        )}

        <Typography variant="subtitle1">
          Created by
          <Box fontWeight="fontWeightMedium" component="span">
            {` ${playlist.owner.displayName}`}
          </Box>
          {` · ${playlist.tracks.total} Songs`}
        </Typography>

        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(PlayerActions.play({ contextUri: playlist.uri }))
            }
          >
            Play playlist
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
