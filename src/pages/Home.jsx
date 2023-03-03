import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectProductError, selectProductList, selectProductStatus } from '../redux/slice/ProductSlice';

export default function Home() {
  const status = useSelector(selectProductStatus);
  const productList = useSelector(selectProductList);
  const error = useSelector(selectProductError);

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
      {productList && productList.map((product) => (
        <div>
          <h2>{product.title}</h2>
          <h2>{product.description}</h2>
          <img src={product.image} alt="img" height="200" width="150" />
        </div>
      ))}
    </Fragment>
  )
}
