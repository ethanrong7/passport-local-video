import React, { useState } from 'react';
import Axios from "axios";

export default function Login(){
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);

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

    return(
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
    )
}