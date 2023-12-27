import LoadingPart from '../../utils/loadingPart.jsx'
import {useNavigate} from 'react-router-dom'

const Repository = ({id, name, description, branches, lastActivity}) => {
    const navigate = useNavigate()

    const info = (
        <span>
            {branches?.length} branches | {branches?.map(b => b.commits.length).reduce((x, y) => x + y)} total commits |
            last active on {new Date(lastActivity).toLocaleString()}
        </span>
    )

    return (
        <div className="repository" data-cy={'repository'}>
            <h3>{name}</h3>
            <p>{description}</p>

            {id ? info : <LoadingPart/>}

            {id && <button onClick={() => navigate(id)}>Details</button>}
        </div>
    )
}

export default Repository
