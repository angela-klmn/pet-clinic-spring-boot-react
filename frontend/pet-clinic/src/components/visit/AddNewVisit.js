import {useParams} from "react-router-dom";
import React, {useState} from "react";

const AddNewVisit = ({handleAddNewVisit}) => {

    const treatmentType = [" CONSULTATION", "EMERGENCY_CARE", "VACCINATION",
                            "DENTAL_TREATMENT", "LABORATORY_SERVICES",
                            "SKIN_CARE", "SURGERY"]

    let { petId } = useParams();
    const [visitType, setVisitType] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    let newVisit = {"treatmentType": "CONSULTATION", "description": "consultation", "price": "10000"}

    const addNewVisit = () => {
        console.log("petId"+petId)
        newVisit.type = visitType;
        newVisit.description = description;
        newVisit.price = price;
        handleAddNewVisit(newVisit, petId);

    }

    return (
        <div className='flexcontainer'>
            <div>

                <br/>
                <h1>Add new Visit: </h1><br/>

                <form onSubmit={(e) =>{e.preventDefault(); addNewVisit()}} className="form">

                    <label htmlFor="type">Choose a treatment type:</label><br/>
                    <select id="type" name="type" required onChange={(e) => {
                        setVisitType(e.target.value)}}>
                        <option key="1" value="" disabled selected>Select your option</option>
                        {treatmentType.map(visitType =>
                            <option key={visitType} value={visitType}>{visitType}</option>)};
                    </select>
                    <br/>

                    <label>Description: </label><br />
                    <input type="text" required value={description} onChange={(e) => {setDescription(e.target.value)}}  /><br />

                    <label>Price: </label><br />
                    <input type="text" required value={price} onChange={(e) => {setPrice(e.target.value)}}  /><br />
                    <br /><br />

                    <input type="submit" value="Add New Visit" />
                </form>
            </div>

        </div>
    )
}

export default AddNewVisit;