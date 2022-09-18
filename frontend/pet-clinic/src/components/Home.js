import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      This is the HOME component.
      <Link to={`/owners/add`}><button className='btn btn-outline-secondary'>Add owner</button></Link>

    </div>
  )
}

export default Home
