import styled from 'styled-components'

const UserContainer = styled.div`
  display: flex;
  background-color: #1d2025;
  color: white;
  border-bottom: 1px solid #5e5d5d;
  border-top: 1px solid #5e5d5d;
  padding: .5em;
  width: 20em;
  >div {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    background-color: #373A3F;
    cursor: pointer;
  }
`

const Avatar = styled.img`
  border-radius: 50px;
  height: 3em;
  margin-right: .5em;
`

/**
 * A component that displays information about a user.
 *
 * @param firstName {string} The user's first nam.
 * @param lastName {string} The user's last name.
 * @param email {string} The user's email address.
 * @param avatar {string} The URL of the user's avatar picture.
 * @param clickHandler {() => void} A function that is called when someone clicks on this component.
 */
const User = ({firstName, lastName, email, avatar, clickHandler}) => {

    const handleClick = () => {
        if (clickHandler) {
            clickHandler()
        }
    }

    return (
        <UserContainer onClick={handleClick}>
            <Avatar src={avatar}/>
            <div>
                <div>{firstName} {lastName}</div>
                <div>{email}</div>
            </div>
        </UserContainer>
    )
}

export default User
