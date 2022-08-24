import React from 'react'
import myImage from '../../src/images/dog_and_cat_2.jpg'

const Header = () => {
  return (
    <div className='flexcontainer'>
        <img src={myImage} width={300} alt="doctor animals"/>
        <h1 className='header_h1'>Pet Clinic</h1>
        <br/>
        <br />
        <hr />
        
      
    </div>
  )
}

export default Header
