import React from 'react'
import { Link } from 'react-router-dom'
import '../NewsCard.css'

function NewsCard({ title, publisherName, url, published_date, isSwipeMode }) {



  const manipulateContainerSizeWithTheScreenSizeUsingisSwipeMode = () =>
  {
    if(isSwipeMode === false)
    {
      return 'newsCardContainer';
    }
    else
    {
      return 'smallNewsCardContainer';
    }
  }



  return (
    <div className={manipulateContainerSizeWithTheScreenSizeUsingisSwipeMode()}> 
        <h5 className='title'><Link to={url}  target="_blank" >{title}</Link></h5>
        <h3 className='publisher'>{publisherName}</h3>
        
        <div className='date'>{published_date}</div>
    </div>
  )
}

export default NewsCard