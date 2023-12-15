import {FunctionComponent} from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './pages/home/home.tsx'
import Foo from './pages/foo/foo.tsx'
import Bar from './pages/bar/bar.tsx'
import Class from './pages/class/class.tsx'
import PageNotFound from './pages/404/pageNotFound.tsx'
import Student from './pages/class/student.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/foo'} element={<Foo/>}/>
            <Route path={'/bar'} element={<Bar/>}/>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/class'} element={<Outlet/>}>
                <Route index element={<Class/>}/>
                <Route path={':id'} element={<Student/>}/>
            </Route>
            <Route path={'*'} element={<PageNotFound/>}/>
        </Routes>
    )
}

export default Routing
