import {useEffect, useRef, useState} from 'react'
import {useCreateRepository} from '../../api/repositoriesAPI.js'

const NewRepoModal = ({projectId, show, cancelHandler}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const {mutate: createNewRepo} = useCreateRepository()
    const nameRef = useRef()

    useEffect(() => {
        if (name === '' && description === '') {
            nameRef?.current?.focus()
        }
    })

    const formSubmit = (evt) => {
        evt.preventDefault()
        createNewRepo({projectId, name, description})
        _cancelHandler()
    }

    if (!show) {
        return <></>
    }

    const _cancelHandler = () => {
        setName('')
        setDescription('')
        cancelHandler()
    }

    return (
        <div className='modal'>
            <h3>New repo</h3>

            <form onSubmit={formSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={evt => setName(evt.target.value)} ref={nameRef} data-cy="name"/>

                <label>Description</label>
                <input type="text" value={description} onChange={evt => setDescription(evt.target.value)} data-cy="description"/>

                <button type={'submit'} data-cy="create-new-repo-btn">Create repository</button>
            </form>
            <button onClick={_cancelHandler}>Cancel</button>
        </div>
    )
}

export default NewRepoModal
