import NewCommitForm from './newCommitForm.jsx'

const CommitDetail = ({changedFiles, message}) => {
    return (
        <>
            <h2>Files changed in {message}</h2>
            {changedFiles?.map(f => <p key={f}>{f}</p>)}
        </>
    )
}

export default CommitDetail
