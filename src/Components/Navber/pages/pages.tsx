import React from "react";
import Navbar from "../Naver";
import Home from "../Home/Home";
import SignIn from "../Sign in/Signin";
import CreateAccount from "../CreateAccount/CreateAccount";
import Lists from "../Lists/Lists";
import Movies from "../Movies/Movies";
import AvailableInTheater from "../Theater/Theater";

const Pages: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "signin":
        return <SignIn />;
      case "createAccount":
        return <CreateAccount />;
      case "lists":
        return <Lists />;
      case "movies":
        return <Movies />;
      case "inTheater":
        return <AvailableInTheater />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="page-content">
        {renderPage()}
      </div>
    </div>
  );
};

export default Pages;
