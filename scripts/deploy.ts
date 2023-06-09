import { ethers } from "hardhat";

async function main() {
  const rsvpContractFactory = await ethers.getContractFactory("RSVP");
  const rsvpContract = await rsvpContractFactory.deploy();
  await rsvpContract.deployed();
  console.log("RSVP deployed to:", rsvpContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
