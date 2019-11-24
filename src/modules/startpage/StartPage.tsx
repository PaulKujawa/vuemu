import { Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { AdapterLink } from "modules/shared/components/AdapterLink";
import bgImage from "modules/startpage/static/start-page-bg.jpg";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: "white"
    },
    image: {
      height: "100vh",
      width: "100%",
      backgroundImage: `url("${bgImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
    },
    contentContainer: {
      position: "absolute",
      top: "5rem",
      bottom: "5rem",
      left: 0,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center"
    },
    title: {
      userSelect: "none"
    }
  })
);

export const StartPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* TODO serve image in different sizes and inline SVG as placeholder */}
      <div className={classes.image}></div>
      <div className={classes.contentContainer}>
        <Typography variant="h1" className={classes.title}>
          vuemu
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          component={AdapterLink}
          to="/categories"
        >
          Connect with Spotify
        </Button>
      </div>
    </div>
  );
};
