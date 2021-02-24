import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    callApi();
  });

  const callApi = async () => {
    const result = await fetch("https://picsum.photos/v2/list");
    const response = await result.json();
    setApiResponse(response);
  };

  return (
    <div className="App">
      <h1>Pixuate Assignment</h1>
      <Home apiResponse={apiResponse} />
    </div>
  );
}

export default App;
