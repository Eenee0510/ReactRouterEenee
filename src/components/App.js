import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import About from './About'
import Courses from './Courses'
import Teachers from './Teachers'
import NotFound from './NotFound';
import Featured from './Featured'


const App = () => {
  return(
    <BrowserRouter>
      <div className="container">
        <Header />
          <Routes>
            <Route path = '/' element = {<Home />}></Route>
            <Route path = '/about' element = {<About />}></Route>
            <Route path = '/courses/*' element = {<Courses />}></Route>
            <Route path = '/courses' element = {<Navigate to = '/courses/html' />}></Route>
            <Route path = '/teachers' element = {<Teachers />}></Route>
            <Route path = '/teachers/:topic/:name' element = {<Featured/>}></Route>
            <Route path = '*' element = {<NotFound/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
      
  )
}

export default App;