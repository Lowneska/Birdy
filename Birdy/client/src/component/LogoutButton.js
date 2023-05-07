import "./../style/logout.scss"
import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import {
  Logout,
} from "@mui/icons-material";

const LogoutButton = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const handlelogout = async () => {
    await axios({
      method: "get",
      url: 'http://localhost:5000/auth/logout',
      withCredentials: true
    })
      .then(() => 
      {
        removeCookie("jwt");
      })
      .catch((err) => console.log(err));
      window.location = '/';
  };

  return (
    <Logout onClick={handlelogout}>
    </Logout>
  );
};

export default LogoutButton;