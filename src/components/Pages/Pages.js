import { useState } from "react";
import Banner from "./Banner";
import MarketPage from "./MarketPage";
import CreateListingPage from "./CreateListingPage";
import SettingsPage from "./SettingsPage";
import PagesNav from "./PagesNav";

function Pages() {
  const [page, setPage] = useState("Market");

  return (
    <div className="flex flex-col h-screen justify-between">
      <Banner page={page} />
      {page === "Market" ? <MarketPage className="mb-auto" /> : null}
      {page === "Create Listing" ? <CreateListingPage className="mb-auto" /> : null}
      {page === "Settings" ? <SettingsPage className="mb-auto" /> : null}
      <PagesNav setPage={setPage} />
    </div>
  );
}

export default Pages;
