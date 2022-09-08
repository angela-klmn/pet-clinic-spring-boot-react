import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
// import logo from '../../src/images/logo.jpg'

const NavigationBar = ({searchOwnerByName}) => {

    const [search, setSearch] = useState('');

    return (

        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                {/* <Image roundedCircle src={logo} width={80} /> */}
                <Navbar.Brand href="#">  Pet Clinic</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/owners">Owners</Nav.Link>
                        <Nav.Link href="/owners/add">Add Owner</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
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
                        <Button  type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavigationBar;