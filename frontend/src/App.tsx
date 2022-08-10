import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const [welcomeMessage, setWelcomeMessage] = useState();
  const fetchMessage = () => {
    axios.get("api/hello")
        .then(response => response.data)
        .then(setWelcomeMessage)
  }

  return <>
    {welcomeMessage}
    <button onClick={fetchMessage}>Fetch Message</button>
  </>;
}

export default App;
