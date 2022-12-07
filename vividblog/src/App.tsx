import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import BlogList from './BlogList';
import Blog from './Blog';
 
export default function App() {
  
  return (

    //Routes
    <Routes>
      <Route path="/" element={<BlogList />} />
    <Route path='/blog/:slug' element={<Blog/>}/> 
    </Routes>
    
  );
}


