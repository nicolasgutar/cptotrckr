// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BitcoinDetail from './components/BitcoinDetail';
import EthereumDetail from './components/EthereumDetail';
import ShibaInuDetail from './components/ShibaInuDetail';
import Layout from './components/Layout';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* Wrap all routes with the Layout */}
                <Route path="/" element={<Layout />}>
                    {/* The index route renders the App component */}
                    <Route index element={<App />} />
                    {/* Other routes render their respective components */}
                    <Route path="bitcoin" element={<BitcoinDetail />} />
                    <Route path="ethereum" element={<EthereumDetail />} />
                    <Route path="shiba-inu" element={<ShibaInuDetail />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
