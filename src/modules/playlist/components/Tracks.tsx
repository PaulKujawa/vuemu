import React from "react";
import {
  makeStyles,
  createStyles,
  ListItem,
  List,
  ListItemIcon,
  Box
} from "@material-ui/core";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import { Paginated, PlaylistTrack } from "values";
import { NoContentPlaceholder } from "modules/shared";
import { formatDuration } from "../";
import { TrackDescription } from ".";

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

  if (!playlistTracks.items.length) {
    return <NoContentPlaceholder message="This playlist has no tracks." />;
  }

  return (
    <List className={classes.root}>
      {playlistTracks.items.map((playlistTrack: PlaylistTrack) => {
        return (
          <ListItem button key={playlistTrack.track.id}>
            <ListItemIcon>
              <MusicNoteOutlinedIcon />
            </ListItemIcon>
            <TrackDescription track={playlistTrack.track} />
            <Box ml={4}>{formatDuration(playlistTrack.track.durationMs)}</Box>
          </ListItem>
        );
      })}
    </List>
  );
};
