// src/components/HalvingCountdown.js
import React, { useState, useEffect } from 'react';

const HalvingCountdown = () => {
    const halvingDate = new Date('2028-04-25T00:00:00Z');

    const calculateTimeLeft = () => {
        const difference = halvingDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / (1000 * 60)) % 60),
                Seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = null;
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    if (!timeLeft) {
        return (
            <div className="mt-8 bg-white shadow rounded p-6 w-full max-w-sm">
                <p className="text-center text-xl font-semibold">The Bitcoin halving has occurred!</p>
            </div>
        );
    }

    return (
        <div className="mt-8 bg-white shadow rounded p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold text-center">Bitcoin Halving Countdown</h2>
            <div className="flex justify-around mt-4">
                {Object.keys(timeLeft).map((interval) => (
                    <div key={interval} className="text-center">
                        <p className="text-2xl font-bold">
                            {timeLeft[interval]}
                        </p>
                        <p className="text-gray-600">{interval}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HalvingCountdown;
