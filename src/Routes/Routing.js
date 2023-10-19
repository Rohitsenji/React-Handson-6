import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Navigationbar/Home";
import Student from "../Navigationbar/Student";
import Contact from "../Navigationbar/Contact";
import Navbar from "../Navigationbar/Navbar.js";
import Store from "../Store/Store";
import EditStudent from "../EditStudent/EditStudent";
import AddStudent from "../Addstudent/Addstudent";

const Routing = () => {
  const [data, setData] = useState([
    { name: "Abhijeet", age: 22, batch: "January", course: "BSC" },
    { name: "Kunal", age: 22, batch: "February", course: "B.TECH" },
    { name: "Rohit", age: 22, batch: "March", course: "Web.Dev" },
    { name: "Sonam", age: 22, batch: "April", course: "B.COM" },
    { name: "Vaishnavi", age: 22, batch: "May", course: "BSC" }
  ]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Store.Provider value={{ value: data, setfunction: setData }}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/student"} element={<Student />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={'/editStudent/:id'} element={<EditStudent />} />
            <Route path={'/addStudent'} element={<AddStudent />} />
          </Routes>
        </Store.Provider>
      </BrowserRouter>
    </>
  );
};

export default Routing;