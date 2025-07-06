import React from 'react'

import { Routes, Route } from 'react-router-dom';

import { ToastContainer , Bounce } from 'react-toastify';



import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>



      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />


    </>
  )
}

export default App