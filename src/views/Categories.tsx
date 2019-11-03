import {
  Box,
  createStyles,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import { CategoryCard } from "components/CategoryCard";
import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getCategories } from "store/category/actions";
import { AppState } from "store";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

export const Categories = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { categories, arePending, error } = useSelector(
    ({ category }: AppState) => ({
      categories: category.categories,
      arePending: category.areCategoriesPending,
      error: category.categoriesError
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (!categories.length || arePending) {
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
          {categories.map(category => (
            <Grid item xs={6} sm={4} md={3} key={category.id}>
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
