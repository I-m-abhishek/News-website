import React, { useState} from 'react'
import Navbar from './components/Navbar'
import News  from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
 
const App =()=>{
 const  apikey = process.env.REACT_APP_NEWS_API;
  
  
  const [progress, setProgress] = useState(0);
 
  
    return (
      <Router>
      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
          
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize='6' country='in' category='general'/>}></Route>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="//" pageSize='6' country='in' category='general'/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business"pageSize='6' country='in' category='business'/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize='6' country='in' category='entertainment'/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize='6' country='in' category='health'/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize='6' country='in' category='science'/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize='6' country='in' category='sports'/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize='6' country='in' category='technology'/>}></Route>
        </Routes> 
        
      </div>
      </Router>
    )
  }


export default App