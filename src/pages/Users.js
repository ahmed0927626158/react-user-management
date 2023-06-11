

import "../styles/user.css"
import React, { useState,useEffect } from "react"
import axios  from "axios"

import UsersData from "../components/UserDataRender/users"
function Users() {


   
    return (
        <div className="content">
            
                     <UsersData />
                     
          
        </div>
    )
}
export default Users