import React from 'react'
import './assets/fonts/fonts.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Blogs from './components/Blogs.jsx';
import Post from './components/Post.jsx'
import Home from './components/Home.jsx';
import BlogDetail from './components/BlogDetail.jsx';
const App = () => {
  return (
       <Router>    
       <Navbar/>
       <Routes>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/blogs/:id' element={<BlogDetail/>}/>
       </Routes>
       </Router>  
  )
}

export default App