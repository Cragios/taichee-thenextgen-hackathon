function PagesNav({ setPage }) {
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className=" flex space-x-12 items-center justify-center fixed bottom-0 left-1/2 right-1/2 w-50">
      <button
        onClick={() => {
          changePage("Market");
        }}
        className="px-4 py-2 bg-slate-100 rounded-md"
      >
        Market
      </button>
      <button
        onClick={() => {
          changePage("Create Listing");
        }}
        className="px-4 py-2 bg-slate-100 rounded-md"
      >
        Create Listing
      </button>
      <button
        onClick={() => {
          changePage("Settings");
        }}
        className="px-4 py-2 bg-slate-100 rounded-md"
      >
        Settings
      </button>
    </div>
  );
}

export default PagesNav;
