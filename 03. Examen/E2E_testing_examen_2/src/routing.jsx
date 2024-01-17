import {Outlet, Route, Routes} from 'react-router-dom'
import MyRepositories from './pages/my-repositories/myRepositories.jsx'
import RepositoryDetail from './pages/my-repositories/detail/repositoryDetail.jsx'

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Outlet/>}>
                <Route index element={<MyRepositories/>}/>
                <Route path={':id'} element={<RepositoryDetail/>}/>
            </Route>
        </Routes>
    )
}

export default Routing
