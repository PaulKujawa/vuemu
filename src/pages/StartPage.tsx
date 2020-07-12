import { Typography, Button, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { AdapterLink } from "modules/shared";
import { SvgContainer } from "modules/startpage";
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
      <SvgContainer />

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
