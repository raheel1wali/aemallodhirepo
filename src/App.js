import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
      
    </div>
  );
}

export default App;
