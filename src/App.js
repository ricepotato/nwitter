import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "./fbase";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedin={isLoggedin}></AppRouter>
      <footer>&copy; {new Date().getFullYear()} nwitter</footer>
    </>
  );
}

export default App;
