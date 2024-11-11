// src/components/CoinDropdown.js
import React from 'react';

const CoinDropdown = ({ selectedCoin, setSelectedCoin }) => {
    const coins = [
        { id: 'bitcoin', name: 'Bitcoin' },
        { id: 'ethereum', name: 'Ethereum' },
        { id: 'shiba-inu', name: 'Shiba Inu' },
    ];

    return (
        <div className="mt-4 mb-6"> {/* Added mb-6 for spacing */}
            <label htmlFor="coin-select" className="block text-gray-700 mb-2">
                Select a cryptocurrency:
            </label>
            <select
                id="coin-select"
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
                className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
            >
                {coins.map((coin) => (
                    <option key={coin.id} value={coin.id} className="text-gray-800">
                        {coin.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CoinDropdown;
