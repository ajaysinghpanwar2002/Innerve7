import React from 'react'
import Commands from '../components/Commands'
import Form from '../components/Form'
import '../styles/pages/home.css'

function Home() {
  return (
    <div className='homepage'>
      <div className='sampleCommands'>
        <Commands/>
      </div>
      <div className='home-inputForm'>
        <Form/>
      </div>
    </div>
  )
}

export default Home 

