import logo from './logo.svg';
import './App.css';
import Icon from '@mui/material/Icon';
import CommentIcon from '@mui/icons-material/Comment';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Comp from './routes/Comp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, HOST, MONGO_CONNECTION} from './api';
import { createContext } from 'react';
import Login from './Components/Login';


const NewsContext = createContext();

function App() {
  
  const [isMobile, setIsMobile] = useState(false);
  const [isSwipeMode, setIsSwipeMode] = useState(true);
  
  const [data, setData] = useState([{}]);
  
  useEffect(()=> {
    setIsSwipeMode(false);
    const userAgent = navigator.userAgent.toLowerCase();
    console.log(userAgent);
    const isMobileDevice = /mobile|iphone|ipad|android/.test(userAgent);
    
  
    setIsMobile(isMobileDevice);

    console.log(isMobile);

    const url = 'https://news-api14.p.rapidapi.com/top-headlines';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':API_KEY,
      'X-RapidAPI-Host': HOST
    }

    
  };
  
  fetch(url, options)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error)); 
    
  
  }
  
 
  
  , [])
  
  
  return (
    <NewsContext.Provider value={{news_data : [data], ifIsMobile : isMobile}}>
      <Router>
        <div>
          <nav className='nav-bar'>
            
                <Link to="/Comp">News</Link>
                <button onClick={()=>{
                  setIsSwipeMode(!isSwipeMode);
                }}>ChangeMode</button>

              
          </nav>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/Comp' element = {<Comp isSwipeMode={isSwipeMode} setIsSwipeMode={setIsSwipeMode}/>} />
          </Routes>
        </div>
      </Router>
    </NewsContext.Provider>
  );
}

export default App;
export {NewsContext};