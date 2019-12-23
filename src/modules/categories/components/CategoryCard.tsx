import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  makeStyles
} from "@material-ui/core";
import { ImageWithPlaceholder } from "modules/shared/components/ImageWithPlaceholder";
import { Category } from "lib/types";
import { AdapterLink } from "modules/shared/components/AdapterLink";

interface Props {
  category: Category;
}

const useStyles = makeStyles({
  title: {
    position: "absolute",
    top: "70%",
    width: "100%",
    color: "white"
  }
});

export const CategoryCard = ({ category }: Props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea component={AdapterLink} to={"/categories/" + category.id}>
        {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
        <ImageWithPlaceholder url={category.icons[0].url} />
        <div className={classes.title}>
          <Typography variant="h5" component="h2" align="center">
            {category.name}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};
