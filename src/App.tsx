import React from "react";
import Routes from "./routes";
import "./App.css";
import { TaskContextProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <Routes />
    </TaskContextProvider>
  );
}

export default App;
