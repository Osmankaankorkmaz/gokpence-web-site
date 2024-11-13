import React from 'react';

const Modal = ({ isOpen, onClose, name, role, bio, image, contact, social }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">
          &times;
        </button>
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-blue-700 text-center">{name}</h2>
        <p className="text-red-500 text-center mb-4">{role}</p>
        <div className="h-32 overflow-y-auto mb-4 scrollbar-hidden">
          <p className="text-gray-700 text-justify">{bio}</p>
        </div>
        <p className="text-gray-500 text-center">{contact}</p>
        <div className="flex justify-center mt-4">
          {social.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-blue-500 mx-2 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform === 'LinkedIn' && <i className="fab fa-linkedin mr-1"></i>}
              {link.platform === 'GitHub' && <i className="fab fa-github mr-1"></i>}
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
