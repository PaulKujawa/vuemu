import {
  Box,
  Card,
  CardActionArea,
  createStyles,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import {
  AdapterLink,
  ImageWithPlaceholder,
  InfiniteScroll,
  PageHeadline
} from "components";
import React from "react";
import { useGetCategories } from "repositories";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    },
    cardTitle: {
      position: "absolute",
      top: "70%",
      width: "100%",
      color: "white"
    }
  })
);

export default () => {
  const classes = useStyles();
  const categoriesInfo = useGetCategories();

  if (categoriesInfo.isError) {
    // TODO error handling
    return <div>error</div>;
  }

  return (
    <Box mt={3}>
      <PageHeadline title="Browse" subtitle="Genres & Moods" />

      <InfiniteScroll
        canFetchMore={categoriesInfo.canFetchMore}
        isFetching={categoriesInfo.isFetching}
        fetchMore={categoriesInfo.fetchMore}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            {categoriesInfo.data
              ?.flatMap(pc => pc.items)
              .map(category => (
                <Grid item xs={12} sm={4} md={3} key={category.id}>
                  <Card>
                    <CardActionArea
                      component={AdapterLink}
                      to={`/categories/${category.id}`}
                    >
                      {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
                      <ImageWithPlaceholder url={category.icons[0].url} />
                      <div className={classes.cardTitle}>
                        <Typography variant="h5" component="h2" align="center">
                          {category.name}
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </InfiniteScroll>
    </Box>
  );
};
