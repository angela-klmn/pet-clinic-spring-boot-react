import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import picture1 from '../../images/dog_and_cat_1.jpg';
import picture2 from '../../images/dog_and_cat_2.jpg';
import picture3 from '../../images/dog_and_cat_3.jpg';
import "./header.css"

const Header = () => {
  return (
      <Carousel fade>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={picture1}
                  alt="First slide"
                  width="400" height="300"
              />
              {/*<Carousel.Caption>*/}
              {/*    <h1>Pet Clinic</h1>*/}
              {/*</Carousel.Caption>*/}
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={picture2}
                  alt="Second slide"
                  width="400" height="300"
              />

              {/*<Carousel.Caption>*/}
              {/*    <h1>Pet Clinic</h1>*/}
              {/*</Carousel.Caption>*/}
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src={picture3}
                  alt="Third slide"
                  width="400" height="300"
              />

              {/*<Carousel.Caption>*/}
              {/*    <h1>Pet Clinic</h1>*/}
              {/*</Carousel.Caption>*/}
          </Carousel.Item>
      </Carousel>
  )
}

export default Header
