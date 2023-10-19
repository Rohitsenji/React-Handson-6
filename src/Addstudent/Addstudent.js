import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../Store/Store";

const AddStudent = () => {
  const Received = useContext(Store);
  const navigate = useNavigate();

  const newObject = {
    name: "",
    age: "",
    course: "",
    batch: "",
  };

  const handleChange = (e) => {
    newObject[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
 Received.value.push(newObject);
    navigate("/student");
  };

  return (
    <>
      <form className="addstudentdata">
        <h1 className="addHeading"  style={{color: "darkgreen"}}>Add Student</h1>
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <label htmlFor="age">Age :</label>
        <input type="number" name="age" id="age" onChange={handleChange} />
        <label htmlFor="course">Course :</label>
        <input type="text" name="course" id="course" onChange={handleChange} />
        <label htmlFor="batch">Batch :</label>
        <input type="text" name="batch" id="batch" onChange={handleChange} />
        <div className="btnContainer">
          <button type="button" onClick={handleSubmit}>Add Data</button>
          <button type="button" onClick={() => navigate("/student")}>Back</button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;