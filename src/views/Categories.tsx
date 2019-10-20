import {
  Box,
  createStyles,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from "@material-ui/core";
import CategoryCard from "components/CategoryCard";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Category } from "models/category";
import { getCategories } from "store/category/actions";
import { AppState } from "store";

interface Props {
  categories: Category[];
  error: any;
  arePending: boolean;
  getCategories: typeof getCategories;
}

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const _Categories: React.FC<Props> = ({
  categories,
  error,
  arePending,
  getCategories
}) => {
  const classes = useStyles();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

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

const mapStateToProps = ({ category }: AppState) => ({
  categories: category.categories,
  arePending: category.areCategoriesPending,
  error: category.categoriesError
});

const mapDispatchToProps = (dispatch: Function) => ({
  getCategories() {
    dispatch(getCategories());
  }
});

export const Categories = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Categories as any);
