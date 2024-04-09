import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
        hello
        <Link to='/Login'>Login</Link><br />
        <Link to='/Signup'>Signup</Link>
        <Link to='/Contactus'>Contact</Link>
      </h1>
    </div>
  )
}

export default Home