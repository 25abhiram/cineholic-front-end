import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../Naver";
import Home from "../Home/Home";
import SignIn from "../Sign in/Signin";
import CreateAccount from "../CreateAccount/CreateAccount";
import Lists from "../Lists/Lists";
import Movies from "../Movies/Movies";
import AvailableInTheater from "../Theater/Theater";
import { useAuth,AuthProvider } from "../../../context/AuthContext";
import PrivateRoute from "../../Shared/PrivateRoute";

const Pages: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <AuthProvider>
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="page-content">
          <Routes>
            {/* Redirect root ("/") to the appropriate route */}
            <Route
              path="/"
              element={<Navigate to={isAuthenticated ? "/Home" : "/Signin"} />}
            />
            {/* Public routes */}
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />

            {/* Private routes */}
            <Route
              path="/Home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/lists"
              element={
                <PrivateRoute>
                  <Lists />
                </PrivateRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <PrivateRoute>
                  <Movies />
                </PrivateRoute>
              }
            />
            <Route
              path="/inTheater"
              element={
                <PrivateRoute>
                  <AvailableInTheater />
                </PrivateRoute>
              }
            />
             {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/Signin" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Pages;
