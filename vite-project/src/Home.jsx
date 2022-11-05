import React from 'react'
import { useNavigate } from 'react-router'


const Home = () => {
  const Navigate = useNavigate();
  const handleclick = () =>{
    Navigate('/start')
  }

  return (
    <header className="header">
        <div className="h1-wrapper">
         <div className="circle"></div>
         <h1 className="text-wrapper">
            create a counter with React.js
         </h1>
        </div>
        <p>counter app made easy . . . </p>
        <button className='home-btn' onClick={handleclick}>Get started</button>
    </header>
  )
}

export default Home