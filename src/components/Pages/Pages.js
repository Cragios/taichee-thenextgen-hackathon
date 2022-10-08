import { useState } from "react";
import Banner from "./Banner";
import MarketPage from "./MarketPage";
import SettingsPage from "./SettingsPage";
import PagesNav from "./PagesNav";

function Pages() {
  const [page, setPage] = useState("Market");

  return (
    <div>
      <Banner />
      {page === "Market" ? <MarketPage /> : null}
      {page === "Settings" ? <SettingsPage /> : null}
      <PagesNav setPage={setPage} />
    </div>
  );
}

export default Pages;
