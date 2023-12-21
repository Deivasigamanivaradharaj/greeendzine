import React, { useContext } from 'react'
import group2 from './Group_2.png';
import group1 from './Group_1.png';
import './App.css';
import Context from './Context';

function Dashboard() {

  let context = useContext(Context)

  return (
    <div className='Dashboard'>
      <div className='helpicondiv'>
      <img className='helpicon' src={group2} alt='helpicon'></img>
      </div>
      <img className='moptrologo' src={group1} alt='logo'></img>
      <div className='detailsdiv'>
      <div className='header'>Employee Productivity Dashboard</div>
          <div style={{display:"flex", justifyContent:'space-between', margin:"0px 39px", marginTop:"41px"}}>
            <p className='detailtext' >Productivity on Monday</p>
            <p className='percent' >4%</p>
          </div>
          <div className='bar' style={{margin:"7px 29px",width:"11px", background:"#36A54680", border:"1px solid #36A546", height:"11px", borderRadius:"5px"}}></div>

          <div style={{display:"flex", justifyContent:'space-between', margin:"0px 39px", marginTop:"21px"}}>
              <p className='detailtext' >Productivity on Tuesday</p>
              <p className='percent' >92%</p>
            </div>
          <div className='bar' style={{margin:"7px 29px",width:"140px", background:"#36A54680", border:"1px solid #36A546", height:"11px", borderRadius:"5px"}}></div>

          <div style={{display:"flex", justifyContent:'space-between', margin:"0px 39px", marginTop:"21px"}}>
              <p className='detailtext' >Productivity on Wednesday</p>
              <p className='percent' >122%</p>
            </div>
          <div className='bar' style={{margin:"7px 29px",width:"183px", background:"#36A54680", border:"1px solid #36A546", height:"11px", borderRadius:"5px"}}></div>

          <div style={{display:"flex", justifyContent:'space-between', margin:"0px 39px", marginTop:"21px"}}>
              <p className='detailtext' >Productivity on Thursday</p>
              <p className='percent' >93%</p>
            </div>
          <div className='bar' style={{margin:"7px 29px",width:"132px", background:"#36A54680", border:"1px solid #36A546", height:"11px", borderRadius:"5px"}}></div>

          <div style={{display:"flex", justifyContent:'space-between', margin:"0px 39px", marginTop:"21px"}}>
              <p className='detailtext' >Productivity on Friday</p>
              <p className='percent' >89%</p>
            </div>
          <div className='bar' style={{margin:"7px 29px",width:"132px", background:"#36A54680", border:"1px solid #36A546", height:"11px", borderRadius:"5px"}}></div>
            

          <div style={{display:"flex", justifyContent:'space-between', margin:"0px 39px", marginTop:"21px"}}>
              <p className='detailtext' >Productivity on Saturday</p>
              <p className='percent' >98%</p>
            </div>
          <div className='bar' style={{margin:"7px 29px",width:"146px", background:"#36A54680", border:"1px solid #36A546", height:"11px", borderRadius:"5px"}}></div>
      </div>

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

export default Dashboard