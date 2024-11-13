// src/components/Navbar.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
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
                    {/* Left Side */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            Tracker
                        </Link>
                    </div>
                    {/* Right Side */}
                    <div className="flex items-center">
                        {/* Learn Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-gray-800 font-medium focus:outline-none"
                            >
                                Learn
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                                    <Link
                                        to="/bitcoin"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Bitcoin
                                    </Link>
                                    <Link
                                        to="/ethereum"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Ethereum
                                    </Link>
                                    <Link
                                        to="/shiba-inu"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Shiba Inu
                                    </Link>
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
