import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, LinearProgress } from "@material-ui/core";
import { Category as CategoryModel } from "models/category";
import { FetchParameters, useFetch } from "utils/http";

interface Props extends RouteComponentProps<{ id: string }> {}

const Category: React.FC<Props> = props => {
  const categoryId = props.match.params.id;

  const [request] = useState<FetchParameters>({
    api: "browse",
    endpoint: `categories/${categoryId}`,
    ignoreErrors: [404]
  });

  const { data, error, pending } = useFetch<CategoryModel>(request);

  if (pending) {
    return (
      <Box mt={3}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  if (error) {
    // TODO error handling
    return <div>error :/</div>;
  }

  return (
    <div>
      <h1>category detail page</h1>

      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Category;
