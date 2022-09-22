import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom'
import "../../css/card.css"


function PetCard({pet}) {
  return (
    <li>
    <Link to={`/pets/${pet.id}`}>
      <a href="" className="card" style={{height: 300, width: 300}}>
        <img src="https://kb.rspca.org.au/wp-content/uploads/2021/07/collie-beach-bokeh.jpg" className="card__image" alt=""/>
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path/>
            </svg>
            {/*<img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt=""/>*/}
            <div className="card__header-text">
              <h3 className="card__title">Name: {pet.name}</h3>
            </div>
          </div>
          <p className="card__description">Birth date: {pet.birthDate}</p>
        </div>
      </a>
    </Link>
    </li>
  );
}

export default PetCard;