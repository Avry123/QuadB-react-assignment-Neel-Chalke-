import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import UserDetailsForm from './UserDetailsForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/purchase/:showName" element={<UserDetailsForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
