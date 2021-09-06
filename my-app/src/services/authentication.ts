import { useEffect, useState } from "react";

export const AuthenticationService = (loginDependency: any) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    //login validation logic here
    setLoggedIn(true);
  }, [loginDependency]);
  return { isLoggedIn, setLoggedIn };
};
