import React from "react";

import Register from "./Component/Register/Register";
import Home from "./Component/Homepage/Home";
import Login from "./Component/Login/Login";

function App(){
  const[Route, setRoute] = React.useState("Login")

  const handleSignIn = (newRoute) =>{
    setRoute(newRoute);
  }
  return(
    <>
      {Route === "Login" ? <Login handleSignIn={handleSignIn} /> : null}
      {Route === "Register" ? <Register handleSignIn={handleSignIn} /> : null}
      {Route === "Home" ? <Home handleSignIn={handleSignIn} /> : null}


    </>
  )
}

export default App;