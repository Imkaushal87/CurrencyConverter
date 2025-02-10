import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Data:", data[currency]); 
                setData(data[currency]); // Update state correctly
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [currency]);

    return data;  // This now returns the currency conversion rates
}

export default useCurrencyInfo;
