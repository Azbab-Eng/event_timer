import { BrowserRouter, Routes, Link , Route, useParams, useLocation } from "react-router-dom"
import Nav from "./Nav"
function Dashboard(){
    let {id} = useParams()
    return(
        <>
            <div>This is Dashboard <b>{id}</b> <span><Link to="/settings">Settings</Link></span></div>
        </>
    )
}
function Profile(){
    return(
        <>
            <div>This is Profile</div>
        </>
    )
}
function Settings(){
    return(
        <>
            <div>This is Settings</div>
        </>
    )
}
function NotFound(){
    let location = useLocation()
    return(
        <>
            <div> <h1>404 - Page</h1> <b>"{location.pathname}"</b> Not Found </div>
        </>
    )
}


 function RouteExer (){
    return(
        <>
            <div><strong>NAVIGATING</strong></div>
        <BrowserRouter>
          <Nav />
            <Routes>
                <Route path="dashboard/:id" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteExer