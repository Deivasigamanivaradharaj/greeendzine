import React, { useContext, useState } from 'react'
import group2 from './Group_2.png';
import group1 from './Group_1.png';
import './App.css';
import Context from './Context';
import contacts from './data.json';

function EmployeeList() {

  let[search, updatesearch] = useState("")
  let[isempty,updateisempty] = useState(true)

  function onsearch(){
    if(search===""){
      updateisempty(true)
    }
    else{
      updateisempty(false)
    }
  }

  let context = useContext(Context)

  return (
    <div className='Dashboard'>
      <div className='helpicondiv'>
      <img className='helpicon' src={group2} alt='helpicon'></img>
      </div>
      <img className='moptrologo' src={group1} alt='logo'></img>
      
      <input type='text' className='search' placeholder='Search with name' onChange={(event) => {
          updatesearch(event.target.value)
        }}></input>
      <button className='searchbtn' onClick={(event) => {
          event.preventDefault()
          onsearch();
        }}><i class="fa fa-search" aria-hidden="true"></i></button>

{isempty &&
  (<div className='datacontainer'>

  {contacts.map((item, index) => (
    <div className='data' key={index}>
      <p>EMP ID : <span>{item.empid}</span></p>
      <p>Name : <span>{item.name}</span></p>
      <p>DOB : <span style={{color:"orange"}}>{item.DOB}</span></p>
      <p>Role : <span style={{color:"green"}}>{item.Role}</span></p>
    </div>
  ))}


</div>)
}
  {!isempty && (<div className='datacontainer'>

        {/* {contacts.map((item, index) => (
          <div className='data' key={index}>
            <p>EMP ID : <span>{item.empid}</span></p>
            <p>Name : <span>{item.name}</span></p>
            <p>DOB : <span style={{color:"orange"}}>{item.DOB}</span></p>
            <p>Role : <span style={{color:"green"}}>{item.Role}</span></p>
          </div>
        ))} */}

{contacts.map((item, index) =>{ 
  if(item.name === search){
  return (
          <div className='data' key={index}>
            <p>EMP ID : <span>{item.empid}</span></p>
            <p>Name : <span>{item.name}</span></p>
            <p>DOB : <span style={{color:"orange"}}>{item.DOB}</span></p>
            <p>Role : <span style={{color:"green"}}>{item.Role}</span></p>
          </div>
        )
  }
  })}


</div>)}

      <div className='menubar'>
        <button className='homebtn menubtn' onClick={(event) => {
            event.preventDefault()
            context.ondashclick()
        }}><i class="fa fa-home" aria-hidden="true"></i></button>
        <button className='userbtn menubtn' onClick={(event) => {
            event.preventDefault()
            context.onuserclick()
        }}><i class="fa fa-user" aria-hidden="true"></i></button>
      </div>
    </div>
  )
}

export default EmployeeList