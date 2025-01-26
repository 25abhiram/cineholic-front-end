import React from "react";
import "./App.css"; // Ensure this file exists
import Pages from "./Components/Navber/pages/pages"; // Adjust the path if needed
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Pages />
  </AuthProvider>
  );
};

export default App;
