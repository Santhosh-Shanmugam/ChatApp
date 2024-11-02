import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Chat from './components/Chat'
import Join from './components/Join'
import './custom.css'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Join/>} />
          <Route path="/chat" exact element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
