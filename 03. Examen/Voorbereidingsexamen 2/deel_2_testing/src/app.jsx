import {BrowserRouter} from 'react-router-dom'
import Navigation from './navigation/navigation.jsx'
import UserContext from './context/userContext.jsx'
import {useState} from 'react'
import {getCurrentUser, setCurrentUser} from './api/userApi.js'
import Routing from './routing.jsx'

const App = () => {
    const [user, _setUser] = useState(getCurrentUser())

    const setUser = async (user) => {
         await setCurrentUser(user)
        _setUser(user)
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Navigation/>
            <div className="container">
                <Routing/>
            </div>
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App
