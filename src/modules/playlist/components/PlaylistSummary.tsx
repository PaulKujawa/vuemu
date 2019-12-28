import React from "react";
import { Box, makeStyles, createStyles, Typography } from "@material-ui/core";
import { ImageWithPlaceholder } from "modules/shared/components/ImageWithPlaceholder";
import { PlaylistFull } from "lib/types";

interface Props {
  playlist: PlaylistFull;
}

const useStyles = makeStyles(
  createStyles({
    root: {
      flexBasis: "auto",
      textAlign: "center"
    }
  })
);

export const PlaylistSummary = ({ playlist }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* <Box mx={6}> */}
      <ImageWithPlaceholder url={playlist.images[0].url} alt={playlist.name} />
      {/* </Box> */}
      <Box my={2}>
        <Typography variant="subtitle1">{playlist.description}</Typography>
      </Box>
      <Typography variant="subtitle2">{playlist.tracks.total} Songs</Typography>
      <Typography variant="caption" component="span">
        Created by
      </Typography>
      <Typography variant="subtitle2" component="span">
        {` ${playlist.owner.display_name}`}
      </Typography>
    </Box>
  );
};