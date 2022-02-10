// import necessary dependencies 
import React from 'react';
import ReactDOM from 'react-dom'; 
import './styles.css';
import Lion from './lion.jpg';

  let Gem="SHARE" 
  let Cham="LEARN MORE"
// create a component
    function Hello(){ 

    return( 
    <>
    <div className='myself'> 
      <div className='one'> <img   src={Lion} alt=""  />  
        <h2>Lion</h2> 
        <p>The lion (Panthera leo) is a large cat of the genus Panthera <br></br>native to Africa and India. It has a muscular, deep-chested body, short,<br></br>rounded head, round ears, and a hairy tuft at the end of its tail.</p>
      <h4>{Gem}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Cham}</h4>
      
       </div>
      </div> 
      </>
        )
    }

// show it to user 
 ReactDOM.render(  
  // what do you want to display
  <div>
  <Hello/>
   </div>,
// where do you want display
document.getElementById('root')

 );