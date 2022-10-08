import ItemCard from "../ItemCard";

function MarketView() {
  return (
    <div>
      {/* data goes here */}
      {[1, 2, 3].map((data) => {
        return <ItemCard />;
      })}
    </div>
  );
}

export default MarketView;
