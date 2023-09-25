import * as React from "react";
import { NavLink } from "react-router-dom";
//mport { memo } from "react";

interface INav {
  name: string;
  path: string;
}

const navLinks: INav[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "TodoApp",
    path: "/products"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

const NavTabs = () => {
  // console.log("Inside NavTab");
  return (
    <div className="nav-links">
      {navLinks.length > 0 &&
        navLinks.map((val, indx) => {
          return (
            <NavLink
              to={val.path}
              key={indx}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  textDecoration: "none"
                };
              }}
            >
              {val.name}
            </NavLink>
          );
        })}
    </div>
  );
};

export default NavTabs;
