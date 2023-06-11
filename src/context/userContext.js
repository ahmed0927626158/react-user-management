
import React, { createContext,useReducer} from 'react'
export const userCreateContext=createContext()

export const userReducer=(state,action)=>{
     switch(action.type){
        case "SET_USER":
            return{
                users:action.payload,
            }
        case "UPDATE_USER":
            return {
                
            }
     }
}

export const userContext=({children}) =>{
const [state,dispatch]=useReducer(userReducer,{
    users:null
})
  return (
   <userContext.Provider value={{...state,dispatch}}>
    {children}
   </userContext.Provider>
  )
}


