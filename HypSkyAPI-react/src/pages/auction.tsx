import useAuctions from '../services/api/api';

export default function Auction() {
  const auctions = useAuctions();

  return (
    <div className='p-3 pb-md-4 mx-auto text-center'>
      <h1>Auction</h1>
      {auctions.length > 0 ? (
        auctions.map((auction, index) => (
          <div key={index}>
            <h2>{auction.item_name}</h2>
            <p>Starting Bid: {auction.starting_bid}</p>
            <p>Buy It Now: {auction.bin ? "Yes" : "No"}</p>
          </div>
        ))
      ) : (
        <p>Loading auctions...</p>
      )}
    </div>
  );
}
