import React from 'react'
import "./App.css"
import Header from './components/Header'
import Home from './components/Home'
import Way from './components/Way'
import Boxes from './components/Boxes'
import Way2 from './components/Way2'
import Items from './components/Items'
import Comments from './components/Comments'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Way/>
      <Boxes/>
      <Way2/>
      <Items />
      <Comments/>
    </div>
  )
}

export default App
