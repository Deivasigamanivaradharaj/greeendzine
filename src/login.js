import React, { useContext, useState } from 'react'
import group3 from './Group_3.png';
import './App.css';
import Context from './Context';


function Login() {

  let context = useContext(Context);

    let[Userid, updateUserId] = useState("")
  let[Password, updatePassword] = useState("")
  let[alert,showAlert] = useState(false)
  let[WPalert,showWPAlert] = useState(false)
  let[WUalert,showWUAlert] = useState(false)

  function onLogin(){
    if(Userid==="" || Password==="")
    {
      showAlert(true)
    }
    else
    {
      if(Userid == "user@gmail.com"){
        showWUAlert(false);
        if(Password == "pass"){
          showWPAlert(false);
          context.onLogin();
        }
        else{
          showWPAlert(true);
        }
      }
      else{
        showWUAlert(true);
      }
  }
}

  return (
    <div className='login'>
        <img className='logo' src={group3} alt='logo'></img>
       <p className='hashtext'>We are Electric</p>
       <form className='loginform'>
       <input className='emailinput' type='email' placeholder='E-mail' onChange={(event) => {
          updateUserId(event.target.value)
          showWUAlert(false);
          showAlert(false);
          }}></input>
       <input className='passinput' type='password' placeholder='Password' onChange={(event) => {
          updatePassword(event.target.value)
          showWPAlert(false);
          showAlert(false);
        }}></input>
       <button className='loginbtn' onClick={(event) => {
          event.preventDefault()
          onLogin();
        }}>Login</button>
       {alert && <p className='alert'>Please Fill All The Fields!</p>}
        {WPalert && <p className='alert'>Wrong Password!</p>}
        {WUalert && <p className='alert'>Wrong E-mail!</p>}
       </form>
       <p className='forgotpass'>Forgot password?</p>
    </div>
  )
}

export default Login