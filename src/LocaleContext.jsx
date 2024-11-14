// src/LocaleContext.js

import React, { createContext, useState, useContext } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState('en'); // Default language is English

    const toggleLocale = (language) => {
        setLocale(language);
    };

    return (
        <LocaleContext.Provider value={{ locale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => useContext(LocaleContext);
