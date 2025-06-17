import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <p>An error occoured</p>
        <h1>Error 404</h1>
        <h1>Please return to the home page</h1>
        <Link to='/'><p>Home</p></Link>
    </div>
  )
}

export default Error