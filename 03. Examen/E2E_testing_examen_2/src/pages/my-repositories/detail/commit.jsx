import LoadingPart from '../../../utils/loadingPart.jsx'

const Commit = ({sha, user, date, message, setSelectedCommit}) => {

    const info = (
        <>
            <div>commit: {sha}</div>
            <div>Author: {user?.firstName} {user?.lastName} &lt;{user?.email}&gt;</div>
            <div>Date: {new Date(date).toLocaleString()}</div>
            <button onClick={setSelectedCommit}>Show details</button>
        </>
    )

    return (
        <div className="commit">
            <h3>{message}</h3>
            {sha ? info : <LoadingPart/>}
        </div>
    )
}

export default Commit
