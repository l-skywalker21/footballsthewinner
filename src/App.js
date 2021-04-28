import React from 'react';
import './App.css';
import MainDisplay from './components/MainDisplay';
// import { Image } from 'react-native';
import image from './banner2.jpg'

function App() {
  return (
    <div className="App" >
      {/* <AppHeader/> */}
      <div>
        <img src={image} style={{display: 'flex', width: '-webkit-fill-available'}} alt="Banner"/>
      </div>
      <div style={{display: 'grid'}}>
        <MainDisplay/>
        {/* <hr/> */}
        {/* test */}
      </div>
    </div>
  );
}

export default App;
//flexFlow: 'row nowrap', display: 'flex', alignItems: 'center', maxWidth: '100%', 