import React from "react";
import { LoginCheck } from "modules/auth/components/LoginCheck";

export const Auth = () => {
  // no Login component needed as Spotify's OAuth is used.
  return <LoginCheck />;
};
