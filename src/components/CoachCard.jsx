import React, { useState } from 'react';
import Modal from './Modal';

const CoachCard = ({ name, role, image, bio, contact, social }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setModalOpen(true)}
        className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-8 cursor-pointer transition duration-200 hover:brightness-105 border-l-4 border-red-500"
      >
        <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
        <p className="text-red-500">{role}</p>
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

export default CoachCard;
