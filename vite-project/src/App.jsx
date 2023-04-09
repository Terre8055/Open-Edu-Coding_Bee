import React from "react";

import Register from "./Component/Register/Register";
import Home from "./Component/Homepage/Home";
import Login from "./Component/Login/Login";
import Frontend from "./Component/Courses/Frontend/Frontend";


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
      {Route === 'Frontend'? < Frontend />: null}
    </>
  )
}

export default App;