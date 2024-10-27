import React from 'react';
import Gallery from '../components/Gallery';
import ProjectDetails from '../components/ProjectDetails';
import TeamMembers from '../components/TeamMembers';

const Main = () => {
  return (
    <div>
      <main>
        <Gallery />
        <ProjectDetails />
        <TeamMembers />
      </main>
    </div>
  );
};

export default Main;
