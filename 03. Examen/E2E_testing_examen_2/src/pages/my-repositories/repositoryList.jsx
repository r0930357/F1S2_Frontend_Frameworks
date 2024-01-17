import {useGetRepositories} from '../../api/repositoriesAPI.js'
import Repository from './repository.jsx'
import NewRepoModal from './newRepoModal.jsx'
import {useState} from 'react'

const RepositoryList = ({projectId}) => {
    const [showModal, setShowModal] = useState(false)
    const {data: repositories} = useGetRepositories(projectId)

    return (
        <>
            <button onClick={() => setShowModal(true)} data-cy="new-repo-modal-btn">New repository</button>
            {repositories.map(r => <Repository key={r.id || 'temp'} {...r}/>)}
            <NewRepoModal projectId={projectId} show={showModal} cancelHandler={() => setShowModal(false)}/>
        </>
    )
}

export default RepositoryList
