import {Suspense, useContext, useMemo, useState} from 'react'
import {useGetProjects} from '../../api/projectsAPI.js'
import UserContext from '../../context/userContext.jsx'
import RepositoryList from './repositoryList.jsx'
import LoadingPart from '../../utils/loadingPart.jsx'

const MyRepositories = () => {
    const {user} = useContext(UserContext)
    const [showTab1, setShowTab1] = useState(true)
    const {data: projects} = useGetProjects()
    const myRepos = projects?.filter(p => p.isPrivate)
    const publicRepos = projects?.filter(p => !p.isPrivate)
    const filteredProjects = showTab1 ? myRepos : publicRepos
    const [selectedProject, setSelectedProject] = useState(filteredProjects[0]?.id)

    const projectBtn = (p) => (
        <button key={p.id} onClick={() => setSelectedProject(p.id)} data-cy={'project-btn'}
                className={selectedProject === p.id ? 'active' : ''}>{p.name}</button>
    )

    return (
        <>
            <div className="tabContainer">
                <div className={showTab1 ? 'active' : ''} data-cy={'my-repositories-btn'} onClick={() => {
                    setShowTab1(true)
                    setSelectedProject(myRepos[0]?.id)
                }}>
                    <h1>My projects</h1>
                </div>
                <div className={!showTab1 ? 'active' : ''} data-cy={'public-repositories-btn'} onClick={() => {
                    setShowTab1(false)
                    setSelectedProject(publicRepos[0]?.id)
                }}>
                    <h1>Public projects</h1>
                </div>
            </div>

            <div className="projects-repositories">
                <div>
                    <h3>Projects</h3>
                    {filteredProjects?.map(projectBtn)}
                    {filteredProjects?.length === 0 && <h4>No projects found, please ensure you are logged in and try again.</h4>}
                </div>
                <div>
                    <h3>Repositories</h3>
                    <Suspense fallback={<LoadingPart/>}>
                        <RepositoryList projectId={selectedProject}/>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default MyRepositories
