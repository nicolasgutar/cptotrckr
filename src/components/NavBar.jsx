import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useLocale } from '../LocaleContext.jsx';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const languageDropdownRef = useRef(null);
    const { locale, toggleLocale } = useLocale();
    const intl = useIntl();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            {intl.formatMessage({ id: 'navbar.tracker' })}
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-gray-800 font-medium focus:outline-none"
                            >
                                {intl.formatMessage({ id: 'navbar.learn' })}
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                                    <Link
                                        to="/bitcoin"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {intl.formatMessage({ id: 'navbar.bitcoin' })}
                                    </Link>
                                    <Link
                                        to="/ethereum"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {intl.formatMessage({ id: 'navbar.ethereum' })}
                                    </Link>
                                    <Link
                                        to="/shiba-inu"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {intl.formatMessage({ id: 'navbar.shibaInu' })}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="relative" ref={languageDropdownRef}>
                            <button
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                className="text-gray-800 font-medium focus:outline-none"
                            >
                                Language
                            </button>
                            {isLanguageDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
                                    <button
                                        onClick={() => {
                                            toggleLocale('en');
                                            setIsLanguageDropdownOpen(false);
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 ${locale === 'en' ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => {
                                            toggleLocale('es');
                                            setIsLanguageDropdownOpen(false);
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 ${locale === 'es' ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        Español
                                    </button>
                                    <button
                                        onClick={() => {
                                            toggleLocale('ja');
                                            setIsLanguageDropdownOpen(false);
                                        }}
                                        className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 ${locale === 'ja' ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        日本語
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;