// src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import BitcoinDetail from './components/BitcoinDetail';
import EthereumDetail from './components/EthereumDetail';
import ShibaInuDetail from './components/ShibaInuDetail';
import Layout from './components/Layout';
import { IntlProvider } from 'react-intl';
import { LocaleProvider, useLocale } from './LocaleContext.jsx';
import enMessages from './locales/en.json';
import esMessages from './locales/es.json';
import jaMessages from './locales/ja.json';

const messages = { en: enMessages, es: esMessages, ja: jaMessages };

const AppWithLocale = () => {
    const { locale } = useLocale();

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<App />} />
                        <Route path="bitcoin" element={<BitcoinDetail />} />
                        <Route path="ethereum" element={<EthereumDetail />} />
                        <Route path="shiba-inu" element={<ShibaInuDetail />} />
                    </Route>
                </Routes>
            </Router>
        </IntlProvider>
    );
};

createRoot(document.getElementById('root')).render(
    <LocaleProvider>
        <AppWithLocale />
    </LocaleProvider>
);
