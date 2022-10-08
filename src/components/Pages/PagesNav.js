function PagesNav({ setPage }) {
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1%",
        position: "absolute",
        bottom: "4%",
        left: "2%",
        right: "2%",
      }}
    >
      <button
        onClick={() => {
          changePage("Market");
        }}
      >
        Market
      </button>
      <button
        onClick={() => {
          changePage("Settings");
        }}
      >
        Settings
      </button>
    </div>
  );
}

export default PagesNav;
