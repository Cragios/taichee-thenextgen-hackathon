import { useEffect, useState } from "react";
import { market } from "../../utils/interact";
import ListingCard from "../ListingCard";

function MarketView() {
  const [marketData, setMarketData] = useState(JSON.parse(localStorage.getItem("marketData")));
  useEffect(() => {
    const getMarketData = async () => {
      const data = await market.getAllListingData();
      localStorage.setItem("marketData", JSON.stringify(data));
      setMarketData(data);
    };
    getMarketData();
    // add smart contract event listener
    market.addSmartContractListener();
  }, []);
  return (
    <div>
      {marketData
        ? marketData.map((data, index) => {
            return <ListingCard key={index} index={index} data={data} />;
          })
        : null}
    </div>
  );
}

export default MarketView;
