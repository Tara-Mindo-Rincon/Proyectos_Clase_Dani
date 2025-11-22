import React from "react";
import Header from "/components/Header";
import UserList from "/components/UserList";
import { ThemeProvider } from "/context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header title="User Directory" />
        <UserList />
      </div>
    </ThemeProvider>
  );
}

export default App;
