import { useEffect, useState } from "react";

const url = "https://api.hypixel.net/skyblock/bazaar";

export default function Api() {
    const [bazaar, setBazaar] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                response.json().then(json => {
                    setBazaar(json.products);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
      
  return (
    bazaar
  )
}
