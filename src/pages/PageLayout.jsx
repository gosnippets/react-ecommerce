import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function PageLayout() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUser(user)
  }, [])

  const handleClick = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {user && user.id ? (
            <Fragment>
              <li>
                <Link to="#" onClick={handleClick}>Logout</Link>
              </li>
            </Fragment>
          ) :
            <Fragment>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </Fragment>
          }

        </ul>
      </nav>

      <Outlet />
    </>
  );
}
