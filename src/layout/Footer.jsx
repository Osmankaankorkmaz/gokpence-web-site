import React from 'react';

const Footer = () => {
  
  // Yumuşak kaydırma fonksiyonu
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-blue-700 py-10 mt-10 border-t-4 border-red-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col space-y-10">

        {/* Yanyana Divler */}
        <div className="flex flex-col md:flex-row justify-between md:space-x-10">
          
          {/* Takım Koçu ve Grup Başkanları */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <h4 className="text-lg font-bold text-center">Takım Koçu ve Grup Başkanları</h4>
            <div className="text-center">
              <h5 className="font-semibold flex justify-center items-center">
                Takım Koçu: <span className='text-red-500'>&nbsp;Mehmet Kaya</span>  
                <a href="https://linkedin.com/in/ahmet-yilmaz" className="text-blue-500 ml-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ahmet-yilmaz" className="text-purple-500 ml-2">
                  <i className="fab fa-github"></i>
                </a>
              </h5>
            </div>
            <div className="text-center">
              <h5 className="font-semibold flex justify-center items-center">
                Yazılım Grubu Başkanı: <span className='text-red-500'>&nbsp;Mehmet Kaya</span> 
                <a href="https://linkedin.com/in/ali-can" className="text-blue-500 ml-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ali-can" className="text-purple-500 ml-2">
                  <i className="fab fa-github"></i>
                </a>
              </h5>
            </div>
            <div className="text-center">
              <h5 className="font-semibold flex justify-center items-center">
                Mekanik Grubu Başkanı: <span className='text-red-500'>&nbsp;Mehmet Kaya</span> 
                <a href="https://linkedin.com/in/ayse-demir" className="text-blue-500 ml-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ayse-demir" className="text-purple-500 ml-2">
                  <i className="fab fa-github"></i>
                </a>
              </h5>
            </div>
            <div className="text-center">
              <h5 className="font-semibold flex justify-center items-center">
                Elektronik Grubu Başkanı:  <span className='text-red-500'>&nbsp;Mehmet Kaya</span> 
                <a href="https://linkedin.com/in/mehmet-kaya" className="text-blue-500 ml-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/mehmet-kaya" className="text-purple-500 ml-2">
                  <i className="fab fa-github"></i>
                </a>
              </h5>
            </div>
          </div>

          <div className="flex flex-col mt-8 md:mt-0 space-y-4 w-full md:w-1/2">
            <h4 className="text-lg font-bold text-center">Hızlı Linkler</h4>
            <div className="flex flex-row md:flex-col md:items-center flex-wrap justify-center space-x-6 md:space-x-0 md:space-y-4">
              <a 
                href="#Home" 
                onClick={(e) => smoothScroll(e, "Home")}
                className="text-red-500 hover:text-blue-700 transition duration-200">
                Anasayfa
              </a>
              <a 
                href="#Gallery" 
                onClick={(e) => smoothScroll(e, "Gallery")}
                className="text-red-500 hover:text-blue-700 transition duration-200">
                Galeri
              </a>
              <a 
                href="#ProjectDetails" 
                onClick={(e) => smoothScroll(e, "ProjectDetails")}
                className="text-red-500 hover:text-blue-700 transition duration-200">
                Proje Detayları
              </a>
              <a 
                href="#Contact" 
                onClick={(e) => smoothScroll(e, "Contact")}
                className="text-red-500 hover:text-blue-700 transition duration-200">
                İletişim
              </a>
            </div>
          </div>
        </div>

        {/* Tüm Haklar Saklıdır */}
        <div className="text-center text-gray-600 mt-10">
          <p>Tüm hakları saklıdır &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
