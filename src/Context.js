import React, { createContext, useEffect, useState } from 'react'

let Context = createContext({isDash:true, isLoggedIn:false, onLogin:undefined})

export function ContextProvider(props) {

    let[isLoggedIn,updateisLoggedIn] = useState(false)
    let[isDash,updateisDash] = useState(true)

    function DashIconClick(){
      updateisDash(true)
      console.log("dash")
  }

  function UserIconClick(){
    updateisDash(false)
    console.log("user")
}

    function LoginHandler(){
        updateisLoggedIn(true)
    }

  return (
    <Context.Provider value={{isLoggedIn:isLoggedIn,isDash:isDash, onLogin:LoginHandler, ondashclick:DashIconClick, onuserclick:UserIconClick}}>
        {props.children}
    </Context.Provider>
  )
}

export default Context