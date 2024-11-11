// src/components/CoinDisplay.js
import React from 'react';

const CoinDisplay = ({ coinData }) => {
    if (!coinData) return <p className="text-gray-500">Loading...</p>;

    // Determine if the price change is positive or negative
    const isPositive = coinData.price_change_percentage_24h >= 0;

    // Conditional formatting for price precision
    const formatPrice = (price) => {
        if (price < 1) {
            return price.toFixed(7); // Display up to six decimal places for small values
        }
        return price.toLocaleString(); // Use standard formatting for larger values
    };

    return (
        <div className="bg-white shadow rounded p-6 w-full max-w-sm">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{coinData.name}</h2>
                <img src={coinData.image} alt={coinData.name} className="w-8 h-8" />
            </div>
            <div className="mt-4">
                <p className="text-gray-700 text-lg">
                    Current Price: <span className="font-medium">${formatPrice(coinData.current_price)}</span>
                </p>
                <p className={`text-lg mt-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    24h Change: {coinData.price_change_percentage_24h.toFixed(2)}%
                </p>
            </div>
        </div>
    );
};

export default CoinDisplay;
