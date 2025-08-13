import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connection from './pages/Connection'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Login/>} >
        <Route index element={<Feed/>} />
        <Route path='messages' element={<Messages/>} />
        <Route path='messages/:userId' element={<ChatBox/>} />
        <Route path='connections' element={<Connection/>} />
        <Route path='discover' element={<Discover/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='profile/:profileId' element={<Profile/>} />
        <Route path='create-post' element={<CreatePost/>} />
         </Route>
      </Routes>
    </>
  )
}

export default App