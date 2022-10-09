async function main() {
  const marketFactory = await ethers.getContractFactory("Market");
  const marketContract = await marketFactory.deploy();
  console.log("Contract deployed to address:", marketContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
