import { useState,useContext } from 'react'
import { AuthContextProvider } from './AuthContext.jsx'
import './App.css'
import Todo from './Todo/Todo'
import Login from './Auth/Login.jsx';
import { AuthContext } from './AuthContext.jsx';

function App() {
  const {data,updateData} = useContext(AuthContext);

  return (
    <>
      {console.log(data)}
        {data ?  <Todo /> : <Login />}
    </>
  )
}

export default App
