import React from "react";
import { Link, LinkProps } from "react-router-dom";

// see https://github.com/ReactTraining/react-router/issues/6056
export const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />
);
