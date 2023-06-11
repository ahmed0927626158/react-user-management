import Router from "../../routes/Routes"
import SideBar from "../Sidebar/SideBar"
import TopNav from "../TopNav/TopNav"


const  Layout=()=>{
    return(
        <div className="layout">
            <SideBar />
            <div className="main_layout">
                <TopNav />
                <div className="content">
                    <Router />
                </div>

            </div>

        </div>
    )
}

export default Layout