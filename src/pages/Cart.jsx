import { Grid } from '@mui/material';
import React, { Fragment } from 'react'
import ItemCard from '../components/ItemCard';
import { useCart } from '../context/CartContext'
import { useFavorite } from '../context/FavoriteContext';

export default function Cart() {
  const { addToCart, items } = useCart()
  const { addToFavorite, favItems } = useFavorite()
  return (
    <Fragment>
      <Grid container columns={12}>
        {items && items.map((product) => {
          const findCartItem = items.find((cart_item) => cart_item.id === product.id);
          const findFavItem = favItems.find((fav_item) => fav_item.id === product.id);
          return <ItemCard key={product.id} product={product} findCartItem={findCartItem} addToCart={addToCart} findFavItem={findFavItem} addToFavorite={addToFavorite}/>
        })}
      </Grid>
    </Fragment>
  )
}
