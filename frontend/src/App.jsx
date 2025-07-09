import React from 'react'
import './assets/fonts/fonts.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Blogs from './components/Blogs.jsx';
import Post from './components/Post.jsx'
import Home from './components/Home.jsx';
import Latest from './components/Latest.jsx';
const App = () => {
  return (
    <div className='h-screen w-screen bg-black'>
       <Router>    
       <Navbar/>
       <Home/>
       <Latest/>
       <Routes>
        <Route />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/' element={<Home/>}/>
       </Routes>
       </Router>  
    </div>
  )
}

export default App