
import {  Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './comopnents/Navbar'
import Home from '../src/comopnents/Home'
import Quiz from '../src/comopnents/Quiz'
import Result from '../src/comopnents/Result'
import Login from '../src/comopnents/Login'

function App() {

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
    </>
  )
}

export default App
