import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedin={isLoggedin}></AppRouter>
      ) : (
        "initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} nwitter</footer>
    </>
  );
}

export default App;
