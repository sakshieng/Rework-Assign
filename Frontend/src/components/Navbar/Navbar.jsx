import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.innerNav}>
        <div className={styles.logo}>Blogs</div>
        <div className={styles.navigations}>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/"
          >
            Blogs
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/blogform"
          >
            AddBlog
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/signup"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
