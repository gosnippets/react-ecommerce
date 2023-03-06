import { Grid } from '@mui/material';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../components/ItemCard';
import { useCart } from '../context/CartContext';
import { fetchProduct, selectProductError, selectProductList, selectProductStatus } from '../redux/slice/ProductSlice';

export default function Home() {
  const status = useSelector(selectProductStatus);
  const productList = useSelector(selectProductList);
  const error = useSelector(selectProductError);

  const { addToCart, items } = useCart()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  if (status === 'loading') {
    return <h2>Loading</h2>
  } else if (status === 'failed') {
    return <h2> Error {error}</h2>
  }

  return (
    <Fragment>
      <Grid container columns={12}>
        {productList && productList.map((product) => {
          const findCartItem = items.find((cart_item) => cart_item.id === product.id);
          return <ItemCard key={product.id} product={product} findCartItem={findCartItem} addToCart={addToCart} />
        })}
      </Grid>
    </Fragment>
  )
}
