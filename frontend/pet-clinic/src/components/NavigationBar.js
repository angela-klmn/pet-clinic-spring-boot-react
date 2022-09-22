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

                <Link to={"/"}><Image roundedCircle src="https://i.pinimg.com/originals/09/0a/1b/090a1b4779b5b4c51ca6c7f85c838c2b.png" width={80} /></Link>
            
            <Link to={"/"}><Navbar.Brand href="/">Pet Clinic</Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', width: "100%" }}
                        navbarScroll
                        variant="dark"
                    >
                        {/* ITT MUSZÁJ A REACT SAJÁT Link ELEMÉT HASZNÁLNI */}
                        <Link to={"/"}><Nav.Link href="/">Home</Nav.Link></Link>
                        <Link to={"/owners"}><Nav.Link href="/owners">All Clients</Nav.Link></Link>
                        <Link to={"/owners/add"}><Nav.Link href="/owners/add">Add New Client</Nav.Link></Link>
                        <Link to={"/owners/search"}><Nav.Link href="/owners/search">Search Clients</Nav.Link></Link>
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
                            <NavDropdown.Item >
                            <a href="https://google.com" target="_blank" rel="noreferrer">
          Looking for something else?
        </a>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Form onSubmit={(e) => {e.preventDefault(); searchOwnerByName(search)}} className="d-flex">
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form> */}


                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={"/"}><ProfilePic /></Link>
                    <Link to={"/logout"}><Button style={{width:100}} type="submit" variant="secondary">Log out</Button></Link>
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavigationBar;