import React from 'react';
import Header from "./layout/Header";
import './index.css';
import Navbar from './layout/Navbar';
import ProjectDetails from './components/ProjectDetails';
import TeamMembers from './components/TeamMembers';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
