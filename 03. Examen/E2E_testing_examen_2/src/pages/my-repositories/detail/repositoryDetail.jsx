import {useNavigate, useParams} from 'react-router-dom'
import {useGetRepository} from '../../../api/repositoriesAPI.js'
import Branch from './branch.jsx'
import {useState} from 'react'
import CommitDetail from './commitDetail.jsx'
import NewCommitForm from './newCommitForm.jsx'

const RepositoryDetail = () => {
    const {id} = useParams()
    const {data: repository} = useGetRepository(id)
    const [showAll, setShowAll] = useState(true)
    const [selectedCommit, setSelectedCommit] = useState(undefined)
    const [selectedBranch, setSelectedBranch] = useState(undefined)
    const navigate = useNavigate()

    const noSelectedCommit = (
        <h3>No commit selected, select one to see the changed files.</h3>
    )

    return (
        <>
            <h1><span onClick={() => navigate(-1)}>&lt;</span> {repository?.name}</h1>
            <p>{repository?.description}</p>

            <div className="branches">
                <div>
                    <h3>Branches</h3>

                    <div>
                        <div>
                            <input type={'checkbox'} checked={showAll} onChange={() => setShowAll(true)}/>
                            <label>Show all commits</label>
                        </div>

                        <div>
                            <input type={'checkbox'} checked={!showAll} onChange={() => setShowAll(false)}/>
                            <label>Only show my commits</label>
                        </div>
                    </div>

                    {repository?.branches.map(b => <Branch key={b.id} {...b} showAll={showAll}
                                                           setSelectedBranch={() => setSelectedBranch(b.id)}
                                                           setSelectedCommit={setSelectedCommit}/>)}

                </div>
                <div>
                    {selectedBranch && <NewCommitForm branchId={selectedBranch}/>}
                    {selectedBranch && <hr/>}
                    {selectedCommit ? <CommitDetail {...selectedCommit}/> : noSelectedCommit}
                </div>
            </div>

        </>
    )
}

export default RepositoryDetail
