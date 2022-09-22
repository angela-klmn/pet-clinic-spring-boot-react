import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import ProfilePic from "./ProfilePic";
import "../css/navbar.css";
import {Image} from "react-bootstrap";



const NavigationBar = ({searchOwnerByName}) => {
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
                        <Link to={"/"}><Nav.Link href="/">Home</Nav.Link></Link>
                        <Link to={"/owners"}><Nav.Link href="/owners">Owners</Nav.Link></Link>
                        <Link to={"/owners/add"}><Nav.Link href="/owners/add">Add Owner</Nav.Link></Link>
                        <NavDropdown title="About Us" id="navbarScrollingDropdown">
                            <Link to={"/"}><NavDropdown.Item href="/">Clinic information</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to={"/developers"}><NavDropdown.Item href="/">Developers of the application</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to={"/"}><NavDropdown.Item href="/">Contact the Developers</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to={"/"}><NavDropdown.Item href="/">FAQs</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to={"/"}><NavDropdown.Item href="/">FAQs</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to={`/`}><NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form onSubmit={(e) => {e.preventDefault(); searchOwnerByName(search)}} className="d-flex">
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>


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

export default NavigationBar;