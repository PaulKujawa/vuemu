import React from "react";
import { makeStyles } from "@material-ui/styles";

interface Props {
  url: string;
  color?: string;
  alt?: string;
}

const useStyles = makeStyles({
  container: {
    position: "relative"
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundImage: ({ url }: Props) => `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
});

/*
 * Has a fixed ratio of 1:1 which could be made adjustable.
 */
export const ImageWithPlaceholder = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.image} aria-label={props.alt}></div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1 1">
        <rect fill={props.color || "#131618"} height="1" width="1" />
      </svg>
    </div>
  );
};
