import { useState, useEffect } from 'react';
import axios from 'axios';

const useCryptoData = (selectedCoin) => {
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/markets`, {
                        params: {
                            vs_currency: 'usd',
                            ids: selectedCoin,
                        },
                    }
                );
                setCoinData(response.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data every 5 seconds
        fetchData();
        const interval = setInterval(fetchData, 30000);

        return () => clearInterval(interval);
    }, [selectedCoin]);

    return coinData;
};

export default useCryptoData;
