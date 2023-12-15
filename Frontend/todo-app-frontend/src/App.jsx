import { useState } from 'react'
import { AuthContext } from './Context.jsx'
import './App.css'
import Todo from './Todo/Todo'
import Login from './Auth/Login.jsx';

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <AuthContext.Provider value={{ user }}>
        {user ?  <Todo /> : <Login />}
      </AuthContext.Provider>
    </>
  )
}

export default App
