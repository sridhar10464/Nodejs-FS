import React, { useState } from "react";
import './App.css';
import CreatFile from "./component/CreateFile";
import FileList from "./component/FileList";

const App = () => {
  return (
    <div>
      <CreatFile />
      <FileList />
    </div>
  )
}

export default App;
