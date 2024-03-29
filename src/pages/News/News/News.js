import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const News = () => {
  const news = useLoaderData()
    console.log(news)
    const { details, image_url,title,category_id} = news
  return (
      <Card >
          
      <Card.Img variant='top' src={image_url} />
      <Card.Body>
              <Card.Title>{ title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
              <Link to={`/category/${category_id}`}>
              <Button variant='primary'>Go to category of this news</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default News
