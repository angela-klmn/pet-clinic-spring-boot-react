import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom'


function PetCard({pet}) {
  return (
    <Link to={`/pets/${pet.id}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name: {pet.name}</Card.Title>
        <Card.Text>
          Birth date: {pet.birthDate}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default PetCard;