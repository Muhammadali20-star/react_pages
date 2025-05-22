import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css"

const Header = () => {
  return (
    <div className="p-6 bg-blue-500 text-white">
      {/* <div className="container mx-auto flex justify-between">
      <NavLink className={"header-link"} to={"/"}>Home</NavLink>
      <NavLink className={"header-link"} to={"/recipe"}>Recipe</NavLink>
      <NavLink className={"header-link"} to={"/users"}>User</NavLink>
      <NavLink className={"header-link"} to={"/posts"}>Post</NavLink>
      <NavLink className={"header-link"} to={"/login"}>Sign in</NavLink>
      </div> */}
    </div>
  );
};

export default Header;
