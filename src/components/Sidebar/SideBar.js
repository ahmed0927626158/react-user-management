import { NavLink } from "react-router-dom"
import navLinks from "../../assets/dummy-data/navLinks"
import Logout from "../../assets/images/logout.png"
import "./sidebar.css"
function SideBar(){
    return (
        <div className="sidebar">
            <div className="top-sidebar">
                <h2><span><i className="ri-shut-down-line"></i></span>Dan Parking</h2>
            </div>
            <div className="side-content">
                <div className="menu">
                    <ul className="nav-list">
                    {
                        navLinks.map((item,key)=>(
                        <li className="nav-item" key={key}>
                            <NavLink to={item.path} 
                            className={navClass=>navClass.isActive?"active nav_link":"nav_link"}>
                            <span><i className={item.icon}></i></span>
                         {item.display}</NavLink></li>
                        ))
                    }
                    </ul>
                </div>
                <div className="sidebar-bottom">
                    <span><img src={Logout} />Logout</span>
                    </div>
            </div>
        </div>
    )

    
}
export default  SideBar