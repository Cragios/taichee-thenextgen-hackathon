import { useWeb3React } from "@web3-react/core";
import { market } from "../../utils/interact";

function CreateListingPage() {
  const { account } = useWeb3React();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { identifier, target, price } = event.target;
    console.log(identifier, target, price);
    await market.createListing(identifier.value, account, parseInt(target.value), parseInt(price.value));
    event.target.reset();
  };

  return (
    <div className="max-w-sm mx-auto flex items-center space-x-4">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 shadow-xl px-24 py-12 rounded-xl bg-slate-200">
        <label className="ml-2 block text-sm text-gray-900">
          <span style={{ fontWeight: "bold" }}>Listing Name: </span>
          <input
            type="text"
            name="identifier"
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
          />
        </label>
        <label className="ml-2 block text-sm text-gray-900">
          <span style={{ fontWeight: "bold" }}>Target Amount (in wei): </span>
          <input
            type="number"
            name="target"
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
          />
        </label>
        <label className="ml-2 block text-sm text-gray-900">
          <span style={{ fontWeight: "bold" }}>Price Per Unit (in wei): </span>
          <input
            type="number"
            name="price"
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        />
      </form>
    </div>
  );
}

export default CreateListingPage;
