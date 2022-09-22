import React from 'react'
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../css/card.css"


const Home = () => {
  return (
      <ul className="cards">
          <li>
              <Link to={"/owners"}>
              <a href="" className="card" style={{height:350, width:350}}>
                  <img src="https://www.caterpillartobutterflyentrepreneurship.com/wp-content/uploads/2020/10/clients.jpg" className="card__image" alt=""/>
                  <div className="card__overlay">
                      <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                              <path/>
                          </svg>
                          <img className="card__thumb" src="https://static.thenounproject.com/png/1401473-200.png" alt=""/>
                          <div className="card__header-text">
                              <h3 className="card__title">Clients</h3>
                          </div>
                      </div>
                      <p className="card__description">Go to clients page</p>
                  </div>
              </a>
              </Link>
          </li>
          <li>
              <Link to={"/owners/add"}>
                  <a href="" className="card" style={{height:350, width:350}}>
                      <img src="https://wilsonprintingusa.com/wp-content/uploads/2015/03/Welcome-Packs-for-Businesses.jpg" className="card__image" alt=""/>
                      <div className="card__overlay">
                          <div className="card__header">
                              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                  <path/>
                              </svg>
                              <img className="card__thumb" src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=" alt=""/>
                              <div className="card__header-text">
                                  <h3 className="card__title">Add client</h3>
                              </div>
                          </div>
                          <p className="card__description">Create new client</p>
                      </div>
                  </a>
              </Link>
          </li>
          <li>
              <Link to={"/owners/search"}>
                  <a href="" className="card" style={{height:350, width:350}}>
                      <img src="https://i.pinimg.com/originals/53/fa/8b/53fa8b6031ed376eefd7415920e74c59.jpg" className="card__image" alt=""/>
                      <div className="card__overlay">
                          <div className="card__header">
                              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                  <path/>
                              </svg>
                              <img className="card__thumb" src="https://pixsector.com/cache/e7836840/av6584c34aabb39f00a10.png" alt=""/>
                              <div className="card__header-text">
                                  <h3 className="card__title">Search</h3>
                              </div>
                          </div>
                          <p className="card__description">Search client by name</p>
                      </div>
                  </a>
              </Link>
          </li>
     </ul>
  );
}

export default Home


