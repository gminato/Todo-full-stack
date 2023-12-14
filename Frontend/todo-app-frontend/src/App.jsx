import { useState } from 'react'
import { AuthContext } from './Context.jsx'
import './App.css'
import Todo from './Todo/Todo'
import SignUp from './Auth/SignUp.jsx'
import Login from './Auth/Login.jsx'; // Import the missing component

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <AuthContext.Provider value={{ user }}>
        {user ?  <Todo /> : <SignUp />}
      </AuthContext.Provider>
    </>
  )
}

export default App
