import React from "react";
import Naver from "../../Navber/Naver";
import SignIn from "../Sign in/Signin";


const Pages: React.FC = () => {
  return (
    <div>
<Naver/>
      <SignIn />
      {/* <Createaccount /> */}
    </div>
  );
};

export default Pages;
