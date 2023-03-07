import { createContext, useContext, useEffect, useState } from "react"

const FavoriteContext = createContext()

const defaultFavorite = JSON.parse(localStorage.getItem("favorite")) || []

const FavoriteProvider = ({ children }) => {
    const [favItems, setFavItems] = useState(defaultFavorite)

    useEffect(()=>{
        localStorage.setItem("favorite", JSON.stringify(favItems))
    },[favItems])

    const addToFavorite = (data, findFavoriteItem) => {
        if (!findFavoriteItem) {
            return setFavItems((favItems) => [data, ...favItems])
        }

        const filtered = favItems.filter((item) => item.id !== findFavoriteItem.id)
        setFavItems(filtered)
    }

    const removeFromFavorite = (item_id) => {
        const filtered = favItems.filter((item) => item.id !== item_id)
        setFavItems(filtered)
    }

    const values = {
        favItems,
        setFavItems,
        addToFavorite,
        removeFromFavorite
    }

    return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>
}

const useFavorite = () => useContext(FavoriteContext)

export {FavoriteProvider, useFavorite}