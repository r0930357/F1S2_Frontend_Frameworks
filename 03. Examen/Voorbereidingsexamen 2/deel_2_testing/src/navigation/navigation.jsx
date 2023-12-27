import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {useContext, useState} from 'react'
import User from '../utils/user.jsx'
import UserContext from '../context/userContext.jsx'
import {getAllUsers} from '../api/userApi.js'

const NavItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 1em;
  font-size: larger;
  color: white;

  a:hover {
    color: #2a76dd;
  }

  a {
    color: white;
    text-decoration: none;
  }
`

const NavigationContainer = styled.ul`
  list-style: none;
  background-color: #1d2025;
  margin: 0;
  display: flex;
`
const allUsers = getAllUsers()

const Navigation = () => {
    const [usersVisible, setUsersVisible] = useState(false)
    const {user, setUser} = useContext(UserContext)

    const selectUser = (u) => {
        setUsersVisible(false)
        setUser(u)
    }

    const userMenu = (
        <div className={'userMenu'} onMouseLeave={() => setUsersVisible(false)}>
            <button onClick={() => selectUser(undefined)}>Log out</button>
            {allUsers.map(u => <User key={u.id} {...u} clickHandler={() => selectUser(u)}/>)}
        </div>
    )

    return (
        <div>
            <NavigationContainer>
                <NavItem>
                    <NavLink to="/">My repositories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <span onMouseEnter={() => setUsersVisible(true)}>
                        {user ? <span>{user?.firstName} {user?.lastName} </span> : <span>Kies een gebruiker</span>}
                        &nbsp;&or;
                    </span>
                </NavItem>
            </NavigationContainer>

            {usersVisible && userMenu}
        </div>
    )
}

export default Navigation
