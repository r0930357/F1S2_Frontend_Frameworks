import styled from 'styled-components'
import {CSSProperties, FunctionComponent} from 'react'
import {NavLink} from 'react-router-dom'

const NavUL = styled.ul`
  list-style: none;
`

const NavLi = styled.li`
  display: inline-block;
  margin: 1em;
`

const NavBarNoBootstrap: FunctionComponent = () => {
    const activeStyle: CSSProperties = {
        color: '#49DE73',
    }

    const chooseStyle = ({isActive}: {isActive: boolean}): CSSProperties => {
        return isActive ? activeStyle : {}
    }

    return (
        <NavUL>
            <NavLi>
                <NavLink to={'/'} style={chooseStyle}>Home</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to={'/foo'} style={chooseStyle}>Foo</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to={'/bar'} style={chooseStyle}>Bar</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to={'/class'} style={chooseStyle}>Class</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to={'/thisLinkProducesA404Error'} style={chooseStyle}>Error page</NavLink>
            </NavLi>
        </NavUL>
    )
}
export default NavBarNoBootstrap
