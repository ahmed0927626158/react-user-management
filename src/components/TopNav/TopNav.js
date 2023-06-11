import Search from '../../assets/images/search.png'

import Notification from '../../assets/images/notification.png'
import { Link } from 'react-router-dom'
import Profile from "../../assets/images/profile-02.png"
import './top.css'
function TopNav(){
    return (
        <div className="top-nav">
            <div className="top-nav-wrraper">
                <div className="search_box">
                    <input type="text" placeholder="Search" />
                    <span>
                        <i className="ri-search-line"></i>
                        <img src={Search} ></img>
                    </span>
                </div>
                <div className='nav_top-right'>
                    <span className='notification'>
                        <i class="ri-notification-3-fill"></i>
                        <img  src={Notification}/>
                    </span>
                <div className='profile'>
                 <Link to="/setting" ><img src={Profile} alt=''/></Link>
                </div>
                </div>
            </div>
        </div>
    )
}
export default  TopNav