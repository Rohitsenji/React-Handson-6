import React, { useContext} from "react";
import Store from "../Store/Store";
import { Link } from "react-router-dom";

const Student = () => {
  const Received = useContext(Store);
  console.log(Received);
  return (
    <>
      <div className="studentContainer">
        <div className="flexOne">
          <h2 className="studentDetails" style={{color: "darkgreen"}}>Student Details</h2>
          <Link to={"/addStudent"}>
            <button className="addbutton"> + Add Student</button>
          </Link>
        </div>
        <table className="databody">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {Received.value.map((item, index) => {
              return (
                <tr key={index}> 
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.batch}</td>
                  <td>
                    <Link to={`/editStudent/${index}`}>Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;