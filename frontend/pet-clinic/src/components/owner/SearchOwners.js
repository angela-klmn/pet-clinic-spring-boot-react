import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { Link } from 'react-router-dom'

import { useContext } from "react";


const SearchOwners = ({searchOwnerByName}) => {
    

    const [search, setSearch] = useState('');

    

    return (



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

);

}

export default SearchOwners;