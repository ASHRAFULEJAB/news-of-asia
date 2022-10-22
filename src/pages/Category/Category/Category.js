import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CustomNewsCard from '../../Shared/CustomNewsCard/CustomNewsCard'

const Category = () => {
  const categorNews = useLoaderData()
  return (
    <div>
      <h1>News Category:{categorNews.length}</h1>
      {categorNews.map((news) => (
        <CustomNewsCard key={news._id} news={news}></CustomNewsCard>
      ))}
    </div>
  )
}

export default Category
