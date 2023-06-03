import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";


describe("RSVP", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployRSVPFixture() {
    const [owner] = await ethers.getSigners();
    const RSVP = await ethers.getContractFactory("RSVP");
    const rsvp = await RSVP.deploy();
    await rsvp.deployed();

    return { rsvp, owner };
  }

  describe("Deployment", function () {
    it("Should Deploy", async function () {
      const { rsvp, owner } = await loadFixture(deployRSVPFixture);

      expect(owner).to.not.equal(ethers.constants.AddressZero);
    });

    it("Create Event", async function () {
      const { rsvp, owner } = await loadFixture(deployRSVPFixture);

      let RSVPContract = await ethers.getContractAt("RSVP", rsvp.address);

      let deposit = ethers.utils.parseEther("1");
      let maxCapacity = 3;
      let timestamp = 1718926200;
      let eventDataCID =
        "bafybeibhwfzx6oo5rymsxmkdxpmkfwyvbjrrwcl7cekmbzlupmp5ypkyfi";

      let txn = await RSVPContract.createNewEvent(
        timestamp,
        deposit,
        maxCapacity,
        eventDataCID
      );
      
      let receipt = await txn.wait();

      if (receipt.events == undefined) {
        throw new Error("No events were emitted");
      }
      
      expect(receipt.events[0].event).to.equal("NewEvent");
      
    });
  });
});
