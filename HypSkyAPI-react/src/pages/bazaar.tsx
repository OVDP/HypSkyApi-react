import Bz from '../services/api/bz_api';

export default function Bazaar() {
    const bazaarData = Bz();

    return (
        <div className='p-3 pb-md-4 mx-auto text-center'>
            <h1>Bazaar</h1>
            {Object.keys(bazaarData).map((itemKey) => {
                const itemData = bazaarData[itemKey];
                return (
                    <div key={itemKey}>
                        <h2>
                            {itemKey}
                        </h2>
                        <h3>
                            Sell Summary
                            </h3>
                        <ul className="list-group">
                            {itemData.sell_summary.map((sellItem, index) => (
                                <li className='list-group-item' key={index}>Amount: {sellItem.amount}, Price Per Unit: {sellItem.pricePerUnit}, Orders: {sellItem.orders}</li>
                            ))}
                        </ul>
                        <h3>
                            Buy Summary
                        </h3>
                        <ul className="list-group">
                            {itemData.buy_summary.map((buyItem, index) => (
                                <li className='list-group-item' key={index}>Amount: {buyItem.amount}, Price Per Unit: {buyItem.pricePerUnit}, Orders: {buyItem.orders}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
