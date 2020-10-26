import {
  Box,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import {
  ImageWithPlaceholder,
  LinearProgress,
  NoContentPlaceholder
} from "components";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetPlaylist, usePutCurrentlyPlaying } from "repositories";
import { formatDuration, stripHtmlTags, timeBetweenThenAndNo } from "utils";
import { ArtistSimplified } from "values";

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

export default () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const playlistInfo = useGetPlaylist(id);
  const [putCurrentlyPlay] = usePutCurrentlyPlaying();

  if (playlistInfo.isError) {
    // TODO error handling
    return <div>error :/</div>;
  }

  if (!playlistInfo.data) {
    return <LinearProgress />;
  }

  return (
    <Box mt={3}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <ImageWithPlaceholder
                url={playlistInfo.data.images[0].url}
                alt={playlistInfo.data.name}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="overline" component="h2">
                Playlist
              </Typography>

              <Typography variant="h3" component="h1" gutterBottom>
                {playlistInfo.data.name}
              </Typography>

              {playlistInfo.data.description && (
                <Typography variant="subtitle1">
                  {stripHtmlTags(playlistInfo.data.description)}
                </Typography>
              )}

              <Typography variant="subtitle1">
                Created by
                <Box fontWeight="fontWeightMedium" component="span">
                  {` ${playlistInfo.data.owner.displayName}`}
                </Box>
                {` · ${playlistInfo.data.tracks.total} Songs`}
              </Typography>

              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    putCurrentlyPlay({ contextUri: playlistInfo.data!.uri })
                  }
                >
                  Play playlist
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          {!playlistInfo.data.tracks.items.length ? (
            <NoContentPlaceholder message="This playlist has no tracks." />
          ) : (
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    {["Title", "Artist", "Album", "Changed", "Duration"].map(
                      label => (
                        <TableCell key={label}>{label}</TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playlistInfo.data.tracks.items.map((item, idx) => (
                    <TableRow
                      className={classes.row}
                      // selected={item.track.id === playing?.item?.id}
                      hover
                      onClick={() => {
                        putCurrentlyPlay({
                          contextUri: playlistInfo.data!.uri,
                          offset: { position: idx }
                        });
                      }}
                      key={item.track.id}
                    >
                      <TableCell component="th" scope="row">
                        {item.track.name}
                      </TableCell>
                      <TableCell>
                        <Typography>
                          {formatArtists(item.track.artists)}
                        </Typography>
                      </TableCell>
                      <TableCell>{item.track.album.name}</TableCell>
                      <TableCell>
                        <Typography
                          noWrap
                          color="textSecondary"
                        >{`${timeBetweenThenAndNo(
                          item.addedAt
                        )} ago`}</Typography>
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
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
