import React, { useEffect } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  // const user = {
  //   name: "Ricky",
  // };
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
      } else {
        // Logged out
        console.log("Logged Out");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/about">
            <About />
          </Route> */}

        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
