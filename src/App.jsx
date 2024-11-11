// src/App.js
import React, { useState } from 'react';
import CoinDropdown from './components/CoinDropdown';
import CoinDisplay from './components/CoinDisplay';
import HalvingCountdown from './components/HalvingCountDown.jsx';
import useCryptoData from './hooks/useCryptoData';
import './styles/index.css';

const App = () => {
    const [selectedCoin, setSelectedCoin] = useState('bitcoin');
    const coinData = useCryptoData(selectedCoin);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Crypto Tracker</h1>
            <CoinDropdown selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
            <CoinDisplay coinData={coinData} />
            {/* Display the halving countdown when Bitcoin is selected */}
            {selectedCoin === 'bitcoin' && <HalvingCountdown />}
        </div>
    );
};

export default App;
