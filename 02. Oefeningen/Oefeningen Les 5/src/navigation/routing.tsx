import {FunctionComponent, Suspense} from 'react'
import ToDoLists from '../pages/lists/ToDoLists.tsx'
import ToDoListDetail from '../pages/lists/detail/ToDoListDetail.tsx'
import {Outlet, Route, Routes} from 'react-router-dom'
import Home from '../pages/home/home.tsx'
import Login from '../pages/login/login.tsx'
import LoadingPage from '../utils/loadingPage.tsx'

interface RoutingProps {

}

const Routing: FunctionComponent<RoutingProps> = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/lists'} element={<Outlet/>}>
                <Route index element={(
                    <Suspense fallback={<LoadingPage/>}>
                        <ToDoLists/>
                    </Suspense>
                        )}/>
                <Route path={':id'} element={(
                    <Suspense fallback={<LoadingPage/>}>
                        <ToDoListDetail/>
                    </Suspense>
                )}/>
        </Route>
        </Routes>
    )
}

export default Routing