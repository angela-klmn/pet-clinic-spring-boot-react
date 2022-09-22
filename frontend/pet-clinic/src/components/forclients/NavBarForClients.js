import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { Link } from 'react-router-dom'
import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import ProfilePic from "../ProfilePic";
import "../../css/navbar.css";
import {Image} from "react-bootstrap";



const NavBarForClients = () => {
    const { auth } = useContext(AuthContext);

    const [search, setSearch] = useState('');

    

    return (

        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Link to={"/"}><Image roundedCircle src="https://media.istockphoto.com/vectors/pet-logo-design-template-pet-house-pet-clinic-pet-care-or-other-pet-vector-id1139195687?k=20&m=1139195687&s=170667a&w=0&h=rFD6rAg7K2kti0kQWMifhsC52q06RyMuD9MDg5ywB8M=" width={80} /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', width: "100%" }}
                        navbarScroll
                    >
                        {/* ITT MUSZÁJ A REACT SAJÁT Link ELEMÉT HASZNÁLNI */}
                        <Link to={"/client/pets"}><Nav.Link href="/client/pets">My Pets</Nav.Link></Link>
                        <Link to={"/contact-the-clinic"}><Nav.Link href="/contact-the-clinic">Contact the clinic</Nav.Link></Link>
                        <Link to={"/clinic-info"}><Nav.Link href="/clinic-info">Clinic information</Nav.Link></Link>
                        <Link to={"/faqs"}><Nav.Link href="/faqs">FAQs</Nav.Link ></Link>
                        <Link to={"/developers"}><Nav.Link href="/developers">About the developers</Nav.Link></Link>
                        
                    </Nav>
                   
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={"/"}><ProfilePic /></Link>
                    <Link to={"/logout"}><Button type="submit" variant="secondary">Log out</Button></Link>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavBarForClients;