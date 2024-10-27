import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`${isScrolled ? 'fixed top-0 left-0 w-full shadow-md z-50' : 'block'} p-4 bg-white text-gray-900 transition-all duration-300`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="imagesAndVideos/teknofest-logo.png"
                            alt="TEKNOFEST Logosu"
                            className="h-30 w-20 md:h-30 md:w-30 object-cover"
                        />
                    </div>
                    <div className="hidden md:flex flex-grow justify-center">
                        <ul className="flex space-x-8 text-lg">
                            <li>
                                <a
                                    href="#"
                                    className="transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                                    style={{ textUnderlineOffset: '8px' }}
                                >
                                    Anasayfa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                                    style={{ textUnderlineOffset: '8px' }}
                                >
                                    Proje Detayları
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                                    style={{ textUnderlineOffset: '8px' }}
                                >
                                    Takım
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                                    style={{ textUnderlineOffset: '8px' }}
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden flex justify-center items-center w-full">
                        <button
                            aria-label="navigation"
                            type="button"
                            className="text-gray-900 transition duration-300 focus:outline-none focus:text-gray-600 hover:text-gray-600"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <ImCross className="text-3xl" />
                            ) : (
                                <GiHamburgerMenu className="text-3xl" />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center">
                        <img
                            src="imagesAndVideos/gokpence-logo.png"
                            alt="Gök Pençe Logosu"
                            className="h-30 w-20 md:h-30 md:w-30 object-cover" // Set equal height and width for a square shape
                        />
                    </div>
                </div>
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} w-full mx-auto py-8 text-center`}>
                    <div className="flex flex-col justify-center items-center w-full">
                        <a
                            href="#"
                            className="block cursor-pointer py-3 transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                            style={{ textUnderlineOffset: '8px' }}
                        >
                            Ana sayfa
                        </a>
                        <a
                            href="#"
                            className="block cursor-pointer py-3 transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                            style={{ textUnderlineOffset: '8px' }}
                        >
                            Proje Detayları
                        </a>
                        <a
                            href="#"
                            className="block cursor-pointer py-3 transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                            style={{ textUnderlineOffset: '8px' }}
                        >
                            Takım
                        </a>
                        <a
                            href="#"
                            className="block cursor-pointer py-3 transition duration-300 focus:outline-none text-blue-700 hover:text-yellow-500"
                            style={{ textUnderlineOffset: '8px' }}
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
