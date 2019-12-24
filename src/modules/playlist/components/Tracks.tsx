import {
  makeStyles,
  createStyles,
  ListItem,
  List,
  ListItemIcon,
  Box
} from "@material-ui/core";
import MusicNote from "@material-ui/icons/MusicNoteOutlined";
import { Paginated, PlaylistTrack } from "lib/types";
import { formatDuration } from "modules/playlist/utils/track";
import { TrackDescription } from "modules/playlist/components/TrackDescription";
import React from "react";

interface Props {
  playlistTracks: Paginated<PlaylistTrack>;
}

const useStyles = makeStyles(
  createStyles({
    root: {
      // TODO instead consider to turn whole app layout to 100vh
      height: "calc(100vh - 14.125rem)",
      "overflow-y": "scroll",
      padding: 0
    }
  })
);

export const Tracks = ({ playlistTracks }: Props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {playlistTracks.items.map(playlistTrack => (
        <ListItem button key={playlistTrack.track.id}>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <TrackDescription track={playlistTrack.track} />
          <Box ml={4}>{formatDuration(playlistTrack.track.duration_ms)}</Box>
        </ListItem>
      ))}
    </List>
  );
};
