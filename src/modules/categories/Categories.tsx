import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { CategoryCard } from "modules/categories/components/CategoryCard";
import { getCategories } from "modules/categories/store/actions";
import { LinearProgress } from "modules/shared/components/LinearProgress";
import { PageHeadline } from "modules/shared/components/PageHeadline";
import { nextBatchOffset, nextBatchExists } from "modules/shared/utils/paging";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
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

  const { categories, error, pagination } = useSelector(
    ({ categories }: AppState) => ({
      categories: categories.categories,
      error: categories.categoriesError,
      pagination: categories.categoriesPagination
    }),
    shallowEqual
  );

  if (error) {
    // TODO error handling
    return <div>error</div>;
  }

  const loadCategories = () =>
    dispatch(getCategories(nextBatchOffset(pagination)));

  return (
    <React.Fragment>
      <PageHeadline title="Browse by category" />
      <InfiniteScroll
        loadMore={loadCategories}
        hasMore={nextBatchExists(pagination)}
        loader={<LinearProgress key={0} />}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            {categories.map(category => (
              <Grid item xs={6} sm={4} md={3} key={category.id}>
                <CategoryCard category={category} />
              </Grid>
            ))}
          </Grid>
        </div>
      </InfiniteScroll>
    </React.Fragment>
  );
};
