import { useEffect, useState } from "react";

const url = "https://api.hypixel.net/skyblock/auctions";

export default function Api() {
  const [auctions, setAuctions] = useState<any[]>([]);
    useEffect(() => {
      if (Number(sessionStorage.getItem("sessionTime")) + 60000 > new Date().getTime()) {
        console.log("on cooldown");
        return;
      }
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          const totalPages: number = data.totalPages;
          let allAuctions: any[] = [];
          for (let i = 0; i < totalPages; i++) {
            const pageResponse = await fetch(`${url}?page=${i}`);
            const pageData = await pageResponse.json();
            const filteredAuctions = pageData.auctions.map((auction: any) => {
              return {
                item_name: auction.item_name,
                starting_bid: auction.starting_bid,
                bin: auction.bin
              };
            });
            allAuctions = [...allAuctions, ...filteredAuctions];
          }
          setAuctions(allAuctions);
          const currentTime = new Date().getTime();
          sessionStorage.setItem("auctions", JSON.stringify(allAuctions));
          sessionStorage.setItem("sessionTime", currentTime.toString());
          console.log("API call successful");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  return (
    <div>
      <div>API Response: {JSON.stringify(auctions[0])}</div>
    </div>
  );
}