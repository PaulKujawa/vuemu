import {
  Box,
  createStyles,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import CategoryCard from "components/CategoryCard";
import React, { useState } from "react";
import { FetchParameters, useFetch } from "utils/http";
import { CategoryPaging } from "models/category";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const Categories: React.FC = () => {
  const classes = useStyles();

  const [request] = useState<FetchParameters>({
    api: "browse",
    endpoint: "categories",
    query: { limit: "50" }
  });

  const { data, error, pending } = useFetch<CategoryPaging>(request);

  if (pending) {
    return (
      <Box mt={3}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  if (error) {
    // TODO error handling
    return <div>error</div>;
  }

  return (
    <div>
      <Box my={3}>
        <Typography variant="h2" component="h1">
          Browse by category
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {data!.categories.items.map(category => (
            <Grid item xs={6} sm={4} md={3} key={category.id}>
              <CategoryCard category={category as any} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Categories;
