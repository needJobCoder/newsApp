import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { NewsContext } from '../App';
import NewsCard from '../Components/NewsCard';
import "../NewsCard.css"
import { Button } from '@mui/material';

function Comp({isSwipeMode, setIsSwipeMode}) {
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const data = useContext(NewsContext);
  const getNewArray = data.news_data[0].articles;
  const [newsCounter, setNewsCounter] = useState(0);
  
  useEffect(()=>{
    
  }, [])

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
    setEndX(null);
  }

  function handleTouchMove(e) {
    if (startX === null) return;

    setEndX(e.touches[0].clientX);
  }

  function handleTouchEnd() {
    if (startX === null || endX === null) return;

    const deltaX = endX - startX;

    if (deltaX > 50) {
      upButtonPressed();
    } else if (deltaX < -50) {
      downButtonPressed();
    }

    setStartX(null);
    setEndX(null);
  }


  const upButtonPressed = () => {
    if (newsCounter < getNewArray.length - 1) {
      setNewsCounter(newsCounter + 1);
      console.log(newsCounter);

    }
  }

  const downButtonPressed = () => {
    if (newsCounter > 0) {
      setNewsCounter(newsCounter - 1);
      console.log(newsCounter);
    }
  }

  const returnNewCards = () => {
    if (getNewArray === undefined) {
      return <div> Loading .../ </div>
    }
    else {
      if(isSwipeMode === true)
      {
        return <div className='swipe-container'><NewsCard title=
        {getNewArray[newsCounter].title}
        publisherName={getNewArray[newsCounter].publisher.name}
        url={getNewArray[newsCounter].url}
        published_date={getNewArray[newsCounter].published_date}
        isSwipeMode={isSwipeMode}
      /></div> 
      }
      else if (isSwipeMode === false)
      {
        return( <div className='grid-container'>{getNewArray.map((value, index) =>{
            return <NewsCard title=
            {value.title}
            publisherName={value.publisher.name}
            url={value.url}
            published_date={value.published_date}
            isSwipeMode={isSwipeMode}
            />
        })}</div>
        )
      }

    

    }
  }

  const loadButtons = () => {
    if (getNewArray === undefined || data.ifIsMobile === true) {
      return <div> </div>
    }
    else {
      return <div>
        <Button onClick={upButtonPressed}> Up</Button>
        <Button onClick={downButtonPressed}> Down </Button>
      </div>
    }
  }


  return (
    <div className='master-container' onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd} >
      {
        returnNewCards()
      }

      {
        loadButtons()
      }

    </div>
  )
}

export default Comp;