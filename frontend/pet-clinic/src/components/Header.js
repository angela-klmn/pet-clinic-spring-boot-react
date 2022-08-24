import React from 'react'
import myImage from '../../src/images/dog_and_cat_2.jpg'

const Header = () => {
  return (
    <div >
        <img src={myImage} width={300} alt="doctor animals"/>
        <h1>Pet Clinic</h1>
        
      
    </div>
  )
}

export default Header
