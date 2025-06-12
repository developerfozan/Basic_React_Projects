import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from './ContextAPI/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App;