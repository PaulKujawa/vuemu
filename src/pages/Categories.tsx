import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { CategoryCard } from "modules/category/components/CategoryCard";
import { LinearProgress } from "modules/shared/components/LinearProgress";
import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getCategories } from "modules/category/store/actions";
import { AppState } from "store";
import { PageHeadline } from "modules/shared/components/PageHeadline";

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
    return <LinearProgress />;
  }

  if (error) {
    // TODO error handling
    return <div>error</div>;
  }

  return (
    <React.Fragment>
      <PageHeadline title="Browse by category" />

      <div className={classes.root}>
        <Grid container spacing={2}>
          {categories.map(category => (
            <Grid item xs={6} sm={4} md={3} key={category.id}>
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};
