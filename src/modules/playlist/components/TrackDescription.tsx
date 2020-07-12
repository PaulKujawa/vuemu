import { Track } from "values";
import { Typography, ListItemText, Box } from "@material-ui/core";
import React from "react";

interface Props {
  track: Track;
}

export const TrackDescription = ({ track }: Props) => {
  const upperLine = <Typography noWrap>{track.name}</Typography>;

  const BottomLine = (
    <Box display="flex" component="span">
      <Typography variant="body2" component="span" noWrap>
        {`${track.artists[0].name} — ${track.album.name}`}
      </Typography>
    </Box>
  );

  return <ListItemText primary={upperLine} secondary={BottomLine} />;
};
