import { useEffect, useState } from "react";
const url = "https://api.hypixel.net/skyblock/auctions";

export default function Api() {
  const [aap, zetAap] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      response.json().then(json => {
        for (let i = 0; i < json.totalPages; i++) {
          for (let j = 0; j < json.auctions.length; j++) {
            zetAap(prevApiResponse => [...prevApiResponse, json]);
          }
        }
      });
    }
    fetchData();
  }, [aap]);
  console.log(aap);
  return (
    <div>
      <div>API Response: {JSON.stringify(aap)}</div>
    </div>
  )
}