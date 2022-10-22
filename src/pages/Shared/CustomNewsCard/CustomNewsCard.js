import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa'

const CustomNewsCard = ({ news }) => {
  const { details, image_url, author, title, _id,rating,total_view } = news

  return (
    <div>
      <Card className='mb-5'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <Image roundedCircle style={{ height: '50px' }} src={author.img} />
            <div className='ms-3'>
              <p className='mb-0'>{author?.name}</p>
              <p> {author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className='me-3'></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant='top' src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + '...'}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
              <Card.Footer className='d-flex justify-content-between'>
                  <div>
                      <FaStar className='text-warning me-3'></FaStar>
                      {rating.number}
                  </div>
                  <div>
                      <FaEye className='me-3'></FaEye>
                      {total_view}
                  </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default CustomNewsCard
