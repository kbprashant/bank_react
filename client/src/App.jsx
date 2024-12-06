import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Sidebar from './components/Sidebar'
import Viewbanks from './components/Viewbanks'
import Addbank from './components/Addbank'
import Transactions from './components/Transactions'
import Transferfunds from './components/Transferfunds'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/sidebar' element={<Sidebar />}></Route>
    <Route path='/viewbanks' element={<Viewbanks />}></Route>
    <Route path='/addbank' element={<Addbank />}></Route>
    <Route path='/transactions' element={<Transactions />}></Route>
    <Route path='/transferfunds' element={<Transferfunds />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
