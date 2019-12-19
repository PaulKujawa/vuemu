import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import { ImageWithPlaceholder } from "modules/shared/components/ImageWithPlaceholder";
import { Category } from "lib/types";
import { AdapterLink } from "modules/shared/components/AdapterLink";

interface Props {
  category: Category;
}

export const CategoryCard = ({ category }: Props) => {
  return (
    <Card>
      <CardActionArea component={AdapterLink} to={"/categories/" + category.id}>
        {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
        <ImageWithPlaceholder url={category.icons[0].url} />
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {category.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};