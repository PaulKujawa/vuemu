import {
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import React from "react";

interface Props {
  message?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.grey[200],
      flex: 1
    }
  })
);

export const NoContentPlaceholder = ({ message }: Props) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      paddingX={2}
      paddingY={8}
      className={classes.root}
    >
      <Typography variant="subtitle1">
        {message || "No content available."}
      </Typography>
    </Box>
  );
};
