import { useState } from 'react'
import Home from './pages/Home'
import "./index.css"
import Auth from './pages/Auth'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'

export const serverURL = "http://localhost:4000"

function App() {


    const dispatch = useDispatch()

    useEffect(()=>{

      const getUser = async () => {
            try {
              const result = await axios.get(serverURL + "/api/user/current-user" , {withCredentials : true})
              // console.log(result)
              dispatch(setUserData(result.data))
            } catch (error) {
              // console.log(error.message)
              dispatch(setUserData(null))
            }
            
      }
      getUser()
    }, [dispatch])
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>

    </Routes>
  )
}

export default App
