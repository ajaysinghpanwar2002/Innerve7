import React from 'react'
import Form from '../components/Form'
import '../styles/pages/home.css'

function Home() {
  return (
    <div className='homepage'>
      <div className='sampleCommands'>
        sample commands
      </div>
      <div className='home-inputForm'>
        <Form/>
      </div>
    </div>
  )
}

export default Home 