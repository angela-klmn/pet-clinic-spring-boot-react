import {useState} from "react";
import React from "react";

const SearchOwners = ({searchOwnerByName}) => {
    

    const [search, setSearch] = useState('');

    return (
        <div>
            <br/><br/>
        <div className="flexcontainer">
<div>
    <br/>
    <h1 className={"add-label"}>Search client</h1>
    <br/>


    <form onSubmit={(e) => {e.preventDefault(); searchOwnerByName(search)}} >
{/*<Form.Control*/}
{/*    onChange={(e) => setSearch(e.target.value)}*/}
{/*    type="search"*/}
{/*    placeholder="Search for client"*/}
{/*    className="me-2"*/}
{/*    aria-label="Search"*/}
{/*/>*/}
        <input className="textbox" type="text" placeholder="Search client" required onChange={(e) => {
            setSearch(e.target.value)
        }}/><br/><br/>
        <input type="submit" value="Search" className="button"/>
        {/*<Button type="submit" variant="outline-success" className="button">Search</Button>*/}
    <br/><br/>
</form>

    <br/><br/>

</div>
        </div>
            <br/><br/><br/><br/>
        </div>

    );

}

export default SearchOwners;