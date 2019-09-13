import React from "react";
import { fetchCategory } from "repositories/category-repository";
import { RouteComponentProps } from "react-router-dom";
import { Box, LinearProgress } from "@material-ui/core";

interface Props extends RouteComponentProps<{ id: string }> {}

const Category: React.FC<Props> = props => {
  const categoryId = props.match.params.id;
  const response = fetchCategory(categoryId);

  if (response.pending) {
    return (
      <Box mt={3}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  if (response.error) {
    // TODO error handling
    return <div>error :/</div>;
  }

  return (
    <div>
      <h1>category detail page</h1>

      <pre>
        <code>{JSON.stringify(response.data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Category;
