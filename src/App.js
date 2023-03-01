import React, { useState } from "react";
import "./App.css";
import RepositoryList from "./components/RepositoryList";

function App() {
  const [orgName, setOrgName] = useState("Netflix");

  const handleOrgNameChange = (event) => {
    setOrgName(event.target.value);
  };

  return (
    <div className="App">
      <h1>Github Repository Explorer</h1>
      <label>
        Enter organization name:
        <input type="text" value={orgName} onChange={handleOrgNameChange} />
      </label>
      <RepositoryList orgName={orgName} />
    </div>
  );
}

export default App;