import { Typography, Button, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { AdapterLink, StartpageSvg } from "components";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      color: theme.palette.primary.main
    },
    title: {
      userSelect: "none"
    }
  })
);

export const StartPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <StartpageSvg />

      <div className={classes.contentContainer}>
        <Typography variant="h1" className={classes.title}>
          vuemu
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          component={AdapterLink}
          to="/browse"
        >
          Connect with Spotify
        </Button>
      </div>
    </React.Fragment>
  );
};
