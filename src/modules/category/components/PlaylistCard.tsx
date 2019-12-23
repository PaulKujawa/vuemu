import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import { PlaylistSimplified } from "lib/types";
import { ImageWithPlaceholder } from "modules/shared/components/ImageWithPlaceholder";
import React from "react";

interface Props {
  playlist: PlaylistSimplified;
}

export const PlaylistCard = ({ playlist }: Props) => {
  return (
    <Card>
      <CardActionArea
        component="a"
        href={playlist.external_urls.spotify}
        target="_blank"
      >
        {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
        <ImageWithPlaceholder
          url={playlist.images[0].url}
          alt={playlist.name}
        />
        <CardContent>
          <Typography variant="body1">{playlist.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
