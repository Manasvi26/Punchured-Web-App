import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navBar_cont">
        <Link>
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYB7gakjCMZSXNNCMnotJiOrR_t7JdQO65Yv5tQJuE5FBP1xAZ2zeAdkZJVVNqQ4dOJU&usqp=CAU"
            alt=""
          />
        </Link>
        <Link className="links" to="/">
          <div>Home</div>
        </Link>

        <Link className="links" to="/cart">
          <div>Cart</div>
        </Link>
        <Link className="links" to="/my-slots">
          <div>My Slots</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
