import {Routes,Route,Navigate } from "react-router-dom"

import LiveStream from "../pages/LiveStream"
import Users from "../pages/Users"
import Dashboard from "../pages/Dashboard"
import ExitCamera from "../pages/ExitCamera"
import EntryCamera from "../pages/EntryCamera"
import BookingInfo from "../pages/Booking"
import Setting from "../pages/Setting"


function Router(){
    return(
     
        <Routes>
            
            <Route path="/" element={<Navigate to="/dashboard" element={<Dashboard />}></Navigate>}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/booking-info" element={<BookingInfo />}></Route>
            <Route path="/exit-camera" element={<ExitCamera />}></Route>
            <Route path="/entry-camera" element={<EntryCamera />}></Route>
            <Route path="/live-stream" element={<LiveStream />}></Route>
            <Route path="/setting" element={<Setting />}></Route>

        </Routes> 
     
    )
}


export default Router