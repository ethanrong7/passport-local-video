import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Navbar from "./components/navbar/Navbar"
import Budget from "./components/budget/Budget"
import Login from "./components/authentication/Login"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
      credentials: 'include'
    }).then((res) => console.log(res))
      .then(getUser)
      
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res))
      .then(getUser)
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getUser()
  }, [])

  return (

  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <div className="App">
          <div>
            <h1>Register</h1>
            <input
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              placeholder="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Submit</button>
          </div>

          <div>
            <h1>Login</h1>
            <input
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>
          </div>

          <div>
            {data ? <h1>Welcome Back {data.username}</h1> : <h1>You are not signed in</h1>}
          </div>
        </div> 
        </Route>
        <Route exact path="/budget">
          {data ? <h1>Welcome Back {data.username}</h1> : <h1>You are not signed in</h1>}
          <Budget />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router> 
  );
}

export default App;
