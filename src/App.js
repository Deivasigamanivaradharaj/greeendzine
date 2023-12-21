import React, { useContext, useState } from 'react';
import { useViewport } from 'react-viewport-hooks';
import Context from './Context';
import Login from './login';
import Home from './home';


function App() {

let context = useContext(Context);

const {vw} = useViewport();

  if (vw < 412) {
  return (
    <div className="App">
      {!context.isLoggedIn && <Login></Login>}
      {context.isLoggedIn && <Home></Home>}
    </div>
  );
  }
  else{
  return <div> Please Change viewport to 412x914 or lesser... </div>
  }
}

export default App;
