import Bz from '../services/api/bz_api';

export default function Bazaar() {
    const bazaarData = Bz();
    const eggData = bazaarData && bazaarData.EGG ? bazaarData.EGG : null;

    if (!eggData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-3 pb-md-4 mx-auto text-center'>
            <h1>Bazaar</h1>
            <h2>Sell Summary</h2>
            <ul>
                {eggData.sell_summary.map((item, index) => (
                    <li key={index}>Amount: {item.amount}, Price Per Unit: {item.pricePerUnit}, Orders: {item.orders}</li>
                ))}
            </ul>
            <h2>Buy Summary</h2>
            <ul>
                {eggData.buy_summary.map((item, index) => (
                    <li key={index}>Amount: {item.amount}, Price Per Unit: {item.pricePerUnit}, Orders: {item.orders}</li>
                ))}
            </ul>
        </div>
    );
}
