import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import ImageWithPlaceholder from "components/ImageWithPlaceholder";
import { PlaylistSimplified } from "models/playlist";

interface Props {
  playlist: PlaylistSimplified;
}

const PlaylistCard = ({ playlist }: Props) => {
  return (
    <Card>
      <CardActionArea
        component="a"
        href={playlist.external_urls.spotify}
        target="_blank"
      >
        {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
        <ImageWithPlaceholder url={playlist.images[0].url} />
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {playlist.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaylistCard;
