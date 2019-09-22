import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import ImageWithPlaceholder from "components/ImageWithPlaceholder";
import { Category } from "models/category";
import { AdapterLink } from "components/AdapterLink";

interface Props {
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
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

export default CategoryCard;
