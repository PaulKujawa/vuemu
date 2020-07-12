import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import { PlaylistSimplified } from "values";
import {
  AdapterLink,
  ImageWithPlaceholder,
  stripHtmlTags
} from "modules/shared";

interface Props {
  playlist: PlaylistSimplified;
}

export const PlaylistCard = ({ playlist }: Props) => {
  return (
    <Card>
      <CardActionArea component={AdapterLink} to={`/playlists/${playlist.id}`}>
        {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
        <ImageWithPlaceholder
          url={playlist.images[0].url}
          alt={playlist.name}
        />
        {playlist.description && (
          <CardContent>
            <Typography variant="body1">
              {stripHtmlTags(playlist.description)}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};
