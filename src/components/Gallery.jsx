import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  // Slider ayarları
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Görseller listesi
  const images = [
    { src: "imagesAndVideos/gallery/IHAPhoto1.png", alt: "İHA havada uçarken" },
    { src: "imagesAndVideos/gallery/IHAPhoto2.png", alt: "İHA iniş yaparken" },
    { src: "imagesAndVideos/gallery/IHAPhoto3.png", alt: "İHA operasyon sırasında" },
    { src: "imagesAndVideos/gallery/IHAPhoto4.png", alt: "İHA teknolojik detay" },
    { src: "imagesAndVideos/gallery/IHAPhoto5.png", alt: "İHA'nın yan görünümü" },
    { src: "imagesAndVideos/gallery/IHAPhoto6.png", alt: "İHA arazide test edilirken" },
  ];

  return (
    <section id='Gallery' className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">İHA Galerisi</h2>

      {/* Masaüstü ve büyük ekranlar için grid galeri */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={image.src} alt={image.alt} className="object-cover w-full h-64" />
          </div>
        ))}
      </div>

      {/* Küçük ekranlar için slider galeri */}
      <div className="lg:hidden">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image.src} alt={image.alt} className="object-cover w-full h-64" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
