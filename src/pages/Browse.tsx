import React from "react";
import { createStyles, Grid, makeStyles, Box } from "@material-ui/core";
import { CategoryCard, BrowseActions } from "modules/browse";
import {
  getNextBatchOffset,
  hasNextBatch,
  PageHeadline,
  LinearProgress
} from "modules/shared";
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

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { categories, error, pagination } = useSelector(
    ({ browse }: AppState) => ({
      categories: browse.categories,
      error: browse.categoriesError,
      pagination: browse.categoriesPagination
    }),
    shallowEqual
  );

  if (error) {
    // TODO error handling
    return <div>error</div>;
  }

  const loadCategories = () =>
    dispatch(BrowseActions.getCategories(getNextBatchOffset(pagination)));

  return (
    <Box mt={3}>
      <PageHeadline title="Browse" subtitle="Genres & Moods" />
      <InfiniteScroll
        loadMore={loadCategories}
        hasMore={hasNextBatch(pagination)}
        loader={<LinearProgress key={0} />}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            {categories.map(category => (
              <Grid item xs={12} sm={4} md={3} key={category.id}>
                <CategoryCard category={category} />
              </Grid>
            ))}
          </Grid>
        </div>
      </InfiniteScroll>
    </Box>
  );
};
