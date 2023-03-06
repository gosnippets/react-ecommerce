import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

export default function ItemCard({ product, addToCart, findCartItem }) {
    const navigate = useNavigate()
    return (
        <Grid xs={4}>
            <Card sx={{ maxWidth: 345 }} style={{ margin: "5px" }}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={product.image}
                    title={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">Price: ${product.price}</Typography>
                </CardContent>
                <CardActions>
                    <FavoriteBorderIcon fontSize="large" style={{ marginRight: "5px" }} />
                    {findCartItem ?
                        <Button variant="contained" onClick={() => addToCart(product, findCartItem)}>Remove from Cart</Button>
                        :
                        <Button variant="contained" color="secondary" onClick={() => addToCart(product, findCartItem)}>Add to Cart</Button>
                    }

                    <Button variant="outlined" onClick={() => navigate(`/item/${product.id}`)}>More Details</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
