import {
  Box,
  createStyles,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import CategoryCard from "components/CategoryCard";
import React from "react";
import { fetchCategories } from "repositories/category-repository";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const Categories: React.FC = () => {
  const response = fetchCategories();
  const classes = useStyles();

  if (response.pending) {
    return (
      <Box mt={3}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  if (response.error) {
    // TODO error handling
    return <div>error</div>;
  }

  return (
    <div>
      <Box my={3}>
        <Typography variant="h2" component="h1">
          Categories
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {response.data!.categories.items.map(category => (
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
