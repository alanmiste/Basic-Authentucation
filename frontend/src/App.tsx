import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [welcomeMessage, setWelcomeMessage] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [me, setMe] = useState<string>();

  const fetchMe = () => {
    axios.get("api/users/me")
        .then(response => response.data)
        .then(setMe)
  }

  useEffect(()=>{
      fetchMe();
  axios.interceptors.response.use(response => response, error => {
    const status = error.response ? error.response.status : null
    if (status === 401 && !error.config.auth) {
      toast("Sitzung abgelaufen")
      fetchMe()
    }
    return Promise.reject(error);
  })
},
      []
  )

  const login = () => {
    axios.get("api/users/login", {auth: {username, password: password}})
        .then(response => response.data)
        .then(setMe)
        .catch(() => toast("Falsch"))
  }

  const logout = () => {
    axios.get("api/users/logout")
        .then(response => response.data)
        .then(() => setMe("anonymousUser"))
  }

  const fetchMessage = () => {
    axios.get("api/hello")
        .then(response => response.data)
        .then(setWelcomeMessage)
  }

  return <>
    {
      me ? (
          me === 'anonymousUser' ?
              <>
                <input type={"text"} value={username} onChange={ev => setUsername(ev.target.value)}/>
                <input type={"text"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button onClick={login}>Login!</button>
              </> : <>
                hi {me}
                <button onClick={fetchMessage}>Get!</button>
                <button onClick={logout}>Logout!</button>
              </>
      ) : "Loading..."
    }
    <ToastContainer/>
  </>;
}

export default App;
