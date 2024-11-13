import React, { useState } from 'react';
import StudentCard from './StudentCard';

const TeamGroup = ({ groupName, members }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-l-4 border-red-500 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-2xl font-semibold text-blue-700">{groupName}</h3>
        <button className="text-gray-500">{isOpen ? '-' : '+'}</button>
      </div>

      <h3 className="hidden md:block text-2xl font-semibold text-blue-700">{groupName}</h3>

      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 md:hidden">
          {members.map((member, index) => (
            <StudentCard key={index} {...member} />
          ))}
        </div>
      )}

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {members.map((member, index) => (
          <StudentCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamGroup;
