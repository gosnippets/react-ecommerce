import { Badge } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { pink } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorite } from "../context/FavoriteContext";

export default function PageLayout() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  const { items } = useCart()
  const { favItems } = useFavorite()

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
            <IconButton aria-label="fav" onClick={()=>navigate("/favorite")}>
              <Badge badgeContent={favItems.length} color="secondary">
                <FavoriteIcon sx={{ color: pink[500] }} />
              </Badge>
            </IconButton>
            
            <IconButton aria-label="cart" onClick={()=>navigate("/cart")}>
              <Badge badgeContent={items.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
