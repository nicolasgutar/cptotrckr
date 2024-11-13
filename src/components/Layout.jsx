// src/components/Layout.jsx

import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar should be here */}
            <Navbar />
            {/* The main content area */}
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Optional Footer */}
        </div>
    );
};

export default Layout;
