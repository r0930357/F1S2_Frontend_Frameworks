import {useContext, useEffect, useRef, useState} from 'react'
import {useCreateNewCommit} from '../../../api/repositoriesAPI.js'
import {useParams} from 'react-router-dom'
import UserContext from '../../../context/userContext.jsx'

const NewCommitForm = ({branchId}) => {
    const {id: repoId} = useParams()
    const [message, setMessage] = useState('')
    const [changedFiles, setChangedFiles] = useState('')
    const {user} = useContext(UserContext)
    const {mutate: createNewRepo} = useCreateNewCommit()
    const messageRef = useRef()

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.focus();
        }
    }, [branchId])

    const formSubmit = (evt) => {
        evt.preventDefault()
        createNewRepo({repoId, branchId, message, user, changedFiles})
    }

    return (
        <div>
            <h3>New repo</h3>

            <form onSubmit={formSubmit}>
                <label>Commit message</label>
                <input type="text" value={message} onChange={evt => setMessage(evt.target.value)}
                       ref={messageRef}/>

                <label>Filename(s)</label>
                <input type="text" value={changedFiles} onChange={evt => setChangedFiles(evt.target.value)}/>

                <button type={'submit'}>Create commit</button>
            </form>
        </div>
    )
}

export default NewCommitForm
