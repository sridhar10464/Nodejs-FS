import React, { useState } from "react";
import axios from "axios";
import "../styles/FileForm.css";

const CreatFile = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
      axios.post('https://nodejs-fs-jouz.onrender.com/api/add-files')
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          setMessage(error.response.data.error);
        });
    };
  
    return (
      <div className="App">
        <h1>Create Text File</h1>
        <button onClick={handleClick}>Create File</button>
        <p>{message}</p>
      </div>
    );
  
};

export default CreatFile;
