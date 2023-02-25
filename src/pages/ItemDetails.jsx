import React from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    let {id} = useParams()
  return (
    <div>ItemDetails Id: {id}</div>
  )
}
