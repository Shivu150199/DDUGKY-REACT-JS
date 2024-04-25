import React from 'react'
import { data } from '../data'
import Card from './Card'
const AllCard = () => {
  return (
    <>
      {data.map((item) => {
        return <Card key={item.id} std={item} />
      })}
    </>
  )
}

export default AllCard
