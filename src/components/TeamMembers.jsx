import React, { useState } from 'react';

// Modal bileşeni
const Modal = ({ isOpen, onClose, name, role, bio, image, contact, social }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">
          &times;
        </button>
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 text-center">{name}</h2>
        <p className="text-gray-500 text-center mb-4">{role}</p>

        <div className="h-32 overflow-y-auto mb-4 scrollbar-hidden"> {/* Adjust height as needed */}
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
              {link.platform === 'GitHub' && <i className="fab fa-github mr-1"></i>} {/* GitHub ikonu */}
              {link.platform}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};


// Hoca kartı bileşeni
const CoachCard = ({ name, role, image, bio, contact, social }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setModalOpen(true)} className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-8 cursor-pointer transform transition-transform hover:scale-105 border-l-4 border-red-500">
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

// Öğrenci kartı bileşeni
const StudentCard = ({ name, role, image, bio, contact, social }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setModalOpen(true)}
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer transform transition-transform hover:scale-105 "
      >
        <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
        <h4 className="text-xl font-bold text-blue-700">{name}</h4>

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

// Grup bileşeni
const TeamGroup = ({ groupName, members }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-l-4 border-red-500 p-6 rounded-lg shadow-md">
      {/* Toggle button for small screens */}
      <div className="flex justify-between items-center md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-2xl font-semibold text-blue-700">{groupName}</h3>
        <button className="text-gray-500">{isOpen ? '-' : '+'}</button>
      </div>

      {/* Always show group name on larger screens */}
      <h3 className="hidden md:block text-2xl font-semibold text-blue-700">{groupName}</h3>

      {/* Show members only if the group is open on small screens */}
      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {members.map((member, index) => (
            <StudentCard key={index} {...member} />
          ))}
        </div>
      )}

      {/* Always show members on larger screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {members.map((member, index) => (
          <StudentCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const TeamMembers = () => {
  // Takım verileri
  const teamData = {
    coach: {
      name: 'Fatma Feyza KAYA',
      role: 'Takım Koçu',
      image: 'imagesAndVideos/team/fatmafeyzakaya.png',
      bio: 'Fatma Feyza Kaya, bilgisayar mühendisliği alanında uzmanlaşmış bir akademisyen ve Burdur Mehmet Akif Ersoy Üniversitesi’nde öğretim görevlisidir. Lisans eğitimini Selçuk Üniversitesi Bilgisayar Mühendisliği bölümünde tamamlayan Kaya, Konya Teknik Üniversitesi’nde Bilgisayar Mühendisliği alanında yüksek lisans yapmıştır. Makine öğrenimi ve yapay zeka konularında uzmanlaşan Kaya, ayrıca nesne tabanlı programlama alanında da yetkindir. Şu anda Burdur Mehmet Akif Ersoy Üniversitesi’nde Nesne Tabanlı Programlama II dersini vermekte, öğrencilerine modern yazılım geliştirme prensipleri ve uygulamalarını aktarmaktadır.',
      contact: 'fatma@example.com',
      social: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ffkaya' },
        { platform: 'GitHub', url: 'https://github.com/ahmet' },
      ],
    },
    groups: [
      {
        name: 'Yazılım',
        members: [
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
        ],
      },

      {
        name: 'Mekanik',
        members: [
          {
            name: 'Berk',
            role: 'Mechanical Engineer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Mekanik mühendis. Tasarım ve analitik hesaplamalarda uzmandır.',
            contact: 'berk@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/berk' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
        ],
      },
      {
        name: 'Elektronik',
        members: [
          {
            name: 'Faruk',
            role: 'Circuit Designer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Devre tasarım uzmanı. Analog ve dijital devrelerde uzmandır.',
            contact: 'faruk@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/faruk' },
              { platform: 'GitHub', url: 'https://github.com/faruk' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
        ],
      },
      {
        name: 'Similasyon',
        members: [
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Adem ULUSOY',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Frontend geliştirme uzmanı. React ve Vue.js üzerinde deneyimi var.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ahmet' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div id='TeamMembers' className="max-w-5xl mx-auto p-6" style={{ paddingTop: '80px', marginTop: '-80px' }}>
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Takım üyeleri</h2>
      <CoachCard
        name={teamData.coach.name}
        role={teamData.coach.role}
        image={teamData.coach.image}
        bio={teamData.coach.bio}
        contact={teamData.coach.contact}
        social={teamData.coach.social}
      />
      <div className="space-y-8">
        {teamData.groups.map((group, index) => (
          <TeamGroup key={index} groupName={group.name} members={group.members} />
        ))}
      </div>
    </div>

  );
};

export default TeamMembers;
