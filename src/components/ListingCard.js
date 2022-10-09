import { useWeb3React } from "@web3-react/core";
import { market } from "../utils/interact";

function ListingCard({ index, data }) {
  const { account } = useWeb3React();
  const handleParticipate = async (index) => {
    await market.participateInListing(index, account, data.price);
  };
  const handleWithdraw = async (index) => {
    await market.withdrawFromListing(index, account);
  };
  return (
    <div className=" border rounded-md p-8 mx-24 my-8">
      <h1 className="font-medium leading-tight text-3xl">{data.identifier}</h1>
      <p>
        <span style={{ fontWeight: "bold" }}>Lister:</span> {data.host}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>target:</span> {data.target}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>price:</span> {data.price}
      </p>
      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>Participants:</span>
        </p>
        {data.participants
          ? data.participants.map((participant) => {
              return <p>{participant}</p>;
            })
          : null}
      </div>
      <button
        onClick={() => {
          handleParticipate(index);
        }}
        className="px-4 py-2 bg-sky-100 rounded-md m-4"
      >
        Participate
      </button>
      <button
        onClick={() => {
          handleWithdraw(index);
        }}
        className="px-4 py-2 bg-sky-100 rounded-md m-4"
      >
        Withdraw
      </button>
    </div>
  );
}

export default ListingCard;
