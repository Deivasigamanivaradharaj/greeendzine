import React, { useContext } from 'react'
import Context from './Context'
import Dashboard from './Dashboard';
import EmployeeList from './EmployeeList';

function Home() {

  let context = useContext(Context);
  console.log(context.isDash)

  return (
    <div>
    {context.isDash && <Dashboard></Dashboard>}
    {!context.isDash && <EmployeeList></EmployeeList>}
    </div>
  )
}

export default Home