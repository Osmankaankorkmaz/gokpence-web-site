import React from 'react';

const Header = () => {
    return (
        <header id='Home' className="relative h-screen">
            <div className="absolute inset-0 overflow-hidden z-10">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src="/imagesAndVideos/IhaTanıtım.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>
            </div>

            <div className="absolute inset-0 bg-black opacity-90 z-15">fgdeeeeeeeeeeer</div>

            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Gök pençe</h1>
                <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">TEKNOFEST 2024 - İHA Projesi</h1>
                <p className="text-xl drop-shadow-md">Geleceğin Hava Taşımacılığına Bir Adım</p>
            </div>
        </header>
    );
};

export default Header;
