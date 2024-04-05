import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
        <Link to='/Login'>Login</Link><br />
        <Link to='/Signup'>Signup</Link>
      </h1>
    </div>
  )
}

export default Home