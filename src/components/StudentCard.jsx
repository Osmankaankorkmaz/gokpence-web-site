import React, { useState } from 'react';
import Modal from './Modal';

const StudentCard = ({ name, role, image, bio, contact, social }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setModalOpen(true)}
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer transition duration-200 hover:brightness-105"
      >
        <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
        <h4 className="text-xl font-bold text-blue-700 h-8 overflow-hidden">{name}</h4>
        <div className="text-red-500 max-w-xs truncate flex items-center justify-center">
          <p className="truncate">{role}</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        name={name}
        role={role}
        bio={bio}
        image={image}
        contact={contact}
        social={social}
      />
    </div>
  );
};

export default StudentCard;
