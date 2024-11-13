import React from 'react';
import CoachCard from './CoachCard';
import TeamGroup from './TeamGroup';

const TeamMembers = () => {
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
            role: 'Yazılım Birimi Kaptanı',
            image: 'imagesAndVideos/team/ademulusoy.png',
            bio: 'Adem Ulusoy, teknolojiye olan ilgisi ve merakı sayesinde kariyerine yön vermiş bir profesyoneldir. Bilgisayar sistemleri ve yazılımlarıyla ilk tanıştığı günden itibaren bu alandaki becerilerini geliştirmeye odaklanmıştır. MAKÜ - Bilgisayar Teknolojisi ve Programlama bölümünde eğitim alarak teknik bilgi ve yetkinliklerini derinleştirmiştir. IT alanında elde ettiği deneyim, Sistem Yönetimi, Ağ Güvenliği, Yazılım Geliştirme, Veritabanı Oluşturma ve Yönetimi, Bilgisayar Donanımı ve Programları, 3D Tasarım - Modelleme ve Animasyon, IoT Cihazlar ile Robotik ve Otomasyon Projeleri, Sanallaştırma (VirtualBox-VMware), Windows Masaüstü Uygulama Oluşturma gibi alanlarda tecrübe kazanmasını sağlamıştır. Sistem ve ağ altyapılarının kurulumu, yönetimi ve güvenliği Adem’in ilgi alanları arasında yer almaktadır. Bu konularda iş sürekliliği için gereken IT çözümlerini başarıyla geliştirmiştir. Sorunları çözme ve süreçleri iyileştirme konusunda sonuç odaklı bir yaklaşım sergilemekte, karmaşık projeleri yönetirken ekip çalışmasına yatkınlığı sayesinde projeleri zamanında ve başarıyla tamamlamaya odaklanmaktadır. Ayrıca, sürekli değişen IT dünyasında yenilikleri takip eden Adem, sürekli öğrenmeyi bir yaşam tarzı haline getirmiştir. C#, Python, Java gibi programlama dilleri ve SQL veritabanları ile çalışarak iş süreçlerinde otomasyon projeleri geliştirmiştir. Kariyer hedefi, yalnızca teknolojik çözümler üretmekle kalmayıp, aynı zamanda işletmelere stratejik katma değer sağlayan projelerde yer almaktır. İleriye dönük olarak, güvenlik ve bulut teknolojileri konularında daha fazla uzmanlaşmayı, büyük ölçekli IT projelerini yönetmeyi ve teknolojiyle işletmeleri bir adım öteye taşımayı hedeflemektedir.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/ulusy-adm' },
              { platform: 'GitHub', url: 'https://github.com/ahmet' },
            ],
          },
          {
            name: 'Osman Kaan KORKMAZ',
            role: 'Full Stack Developer',
            image: 'imagesAndVideos/team/osmankaankorkmaz.png',
            bio: 'Osman Kaan Korkmaz, Bilgisayar Programcılığı alanında 2. sınıf öğrencisi olarak eğitim hayatına devam etmektedir. Eğitim sürecinde, yazılım geliştirme, oyun tasarımı ve veri tabanı yönetimi konularında yetkinlik kazanmayı hedeflemektedir. Teknoloji alanındaki bilgisi ve deneyimi, başta Unity ve Unreal Engine olmak üzere, çeşitli oyun motorlarıyla oyun geliştirme süreçlerinde aktif olarak rol almasına olanak tanımaktadır. Ayrıca, Blender kullanarak 3D modelleme becerilerini geliştirmiştir. Veri tabanı yönetimi alanında MySQL ve MS SQL gibi sistemleri kullanabilme yeterliliğine sahip olan Osman Kaan, yazılım dilleri konusunda ise C#, Python ve JavaScript gibi dillerde projeler geliştirmektedir. Web geliştirme konusunda MERN stack (MongoDB, Express.js, React.js, Node.js) ile birlikte Bootstrap ve Tailwind CSS gibi teknolojileri kullanarak modern ve kullanıcı odaklı web uygulamaları tasarlamaktadır. Grafik tasarım becerilerini geliştirmek amacıyla Canva ve Adobe uygulamalarını etkin bir biçimde kullanmakta; ayrıca Microsoft Office uygulamaları ile raporlama ve sunum hazırlama konularında deneyim kazanmaktadır. Elektronik projeler üzerinde çalışarak Proteus ve Arduino gibi platformları kullanma yeteneğini geliştirmiştir.',
            contact: 'ahmet@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/osman-kaan-korkmaz-91a082220' },
              { platform: 'GitHub', url: 'https://github.com/Osmankaankorkmaz' },
            ],
          },
        ],
      },

      {
        name: 'Mekanik',
        members: [
          {
            name: 'Berk GÜVEN',
            role: 'Mekanik Birim Kaptanı',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Mekanik mühendis. Tasarım ve analitik hesaplamalarda uzmandır.',
            contact: 'berk@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/berk' },
              { platform: 'GitHub', url: 'https://github.com/berk' },
            ],
          },
          {
            name: 'Can ALTAY',
            role: 'CAD Specialist',
            image: 'https://via.placeholder.com/400x400',
            bio: 'CAD tasarımcısı. Kompleks mekanik parçaların modellemesinde deneyimlidir.',
            contact: 'can@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/can' },
              { platform: 'GitHub', url: 'https://github.com/can' },
            ],
          },
        ],
      },
      {
        name: 'Elektronik',
        members: [
          {
            name: 'Faruk CAN',
            role: 'Elektronik Birim Kaptanı',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Devre tasarım uzmanı. Analog ve dijital devrelerde uzmandır.',
            contact: 'faruk@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/faruk' },
              { platform: 'GitHub', url: 'https://github.com/faruk' },
            ],
          },
          {
            name: 'Kerem SÖNMEZ',
            role: 'PCB Designer',
            image: 'https://via.placeholder.com/400x400',
            bio: 'PCB tasarım uzmanı. Çok katmanlı devre tasarımlarında deneyimlidir.',
            contact: 'kerem@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/kerem' },
              { platform: 'GitHub', url: 'https://github.com/kerem' },
            ],
          },
        ],
      },
      {
        name: 'Similasyon',
        members: [
          {
            name: 'Adem KILINÇ',
            role: 'Similasyon Birim Kaptanı',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Similasyon analiz uzmanı. FEA ve CFD alanlarında deneyimi vardır.',
            contact: 'adem@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/adem' },
              { platform: 'GitHub', url: 'https://github.com/adem' },
            ],
          },
          {
            name: 'Merve KAYA',
            role: 'FEA Analyst',
            image: 'https://via.placeholder.com/400x400',
            bio: 'Yapısal analizlerde uzman. FEA simülasyonları yürütmektedir.',
            contact: 'merve@example.com',
            social: [
              { platform: 'LinkedIn', url: 'https://linkedin.com/in/merve' },
              { platform: 'GitHub', url: 'https://github.com/merve' },
            ],
          },
        ],
      },
    ]
  }      
  return (
    <div id="TeamMembers" className="max-w-5xl mx-auto p-6" style={{ paddingTop: '80px', marginTop: '-80px' }}>
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
