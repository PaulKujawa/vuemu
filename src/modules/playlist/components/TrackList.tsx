import React from "react";
import {
  makeStyles,
  createStyles,
  Paper,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table
} from "@material-ui/core";
import { Paginated, PlaylistTrack, ArtistSimplified } from "values";
import {
  NoContentPlaceholder,
  formatDuration,
  timeBetweenThenAndNo
} from "modules/shared";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { PlayerActions } from "modules/player";
import { AppState } from "store";

interface Props {
  playlistTracks: Paginated<PlaylistTrack>;
  playlistUri: string;
}

const useStyles = makeStyles(
  createStyles({
    table: {
      width: "100%"
    },
    row: {
      "& :hover": {
        cursor: "pointer"
      }
    }
  })
);

export const PlaylistTrackList = ({ playlistTracks, playlistUri }: Props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const playing = useSelector(
    ({ player }: AppState) => player.currentlyPlaying,
    shallowEqual
  );

  /*
   * too long artist list looks bad, `noWrap` even worse, and columns can't be reliably sized:
   * https://github.com/mui-org/material-ui/issues/1911
   */
  const formatArtists = (artists: ArtistSimplified[]) => {
    const list = artists.slice(0, 3);

    return (
      list.map(artist => artist.name).join(", ") +
      (artists.length > list.length ? "..." : "")
    );
  };

  if (!playlistTracks.items.length) {
    return <NoContentPlaceholder message="This playlist has no tracks." />;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {["Title", "Artist", "Album", "Changed", "Duration"].map(label => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {playlistTracks.items.map((item, idx) => (
            <TableRow
              className={classes.row}
              selected={item.track.id === playing?.item.id}
              hover
              onClick={() => {
                dispatch(
                  PlayerActions.play({
                    contextUri: playlistUri,
                    offset: { position: idx }
                  })
                );
              }}
              key={item.track.id}
            >
              <TableCell component="th" scope="row">
                {item.track.name}
              </TableCell>
              <TableCell>
                <Typography>{formatArtists(item.track.artists)}</Typography>
              </TableCell>
              <TableCell>{item.track.album.name}</TableCell>
              <TableCell>
                <Typography
                  noWrap
                  color="textSecondary"
                >{`${timeBetweenThenAndNo(item.addedAt)} ago`}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary">
                  {formatDuration(item.track.durationMs)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
