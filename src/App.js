import React from 'react';
import Header from "./layout/Header";
import './index.css';
import Navbar from './layout/Navbar';
import ProjectDetails from './components/ProjectDetails';
import TeamMembers from './components/TeamMembers';
import Main from './layout/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main/>
    </div>
  );
}

export default App;
