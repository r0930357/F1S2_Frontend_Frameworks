import {useContext, useState} from 'react'
import Commit from './commit.jsx'
import UserContext from '../../../context/userContext.jsx'

const Branch = ({name, commits, showAll, setSelectedCommit, setSelectedBranch}) => {
    const {user} = useContext(UserContext)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const and = <span>&and;</span>
    const or = <span>&or;</span>

    const mappedCommits = (
        <>
            {commits
                ?.filter(c => showAll || c.user.id === user.id)
                ?.map(c => <Commit key={c.sha ?? 'temp'} {...c} setSelectedCommit={() => setSelectedCommit(c)}/>)}
        </>
    )

    return (
        <>
            <h2>{name} <span onClick={() => setIsCollapsed(c => !c)}>{isCollapsed ? and : or}</span></h2>
            <button onClick={setSelectedBranch}>Create a new commit in this branch</button>
            {!isCollapsed && mappedCommits}
        </>
    )
}

export default Branch
