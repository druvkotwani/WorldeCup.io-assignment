import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ChatHome from './components/ChatHome'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chats" element={<ChatHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App