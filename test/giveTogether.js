var GiveTogether = artifacts.require("./GiveTogether.sol");
// Set to the owner of the deployed contract
// var ownerAddr = OWNER ADDRESS;
var ownerAddr = "0x822BBe00D92c21544923af9d660921B5f4Af8dFc";
var listOfCharities;
var numCharities = 0;

contract("GiveTogether", function(accounts) {
    it("Number of Charities greater than 0", function() {
        GiveTogether.deployed() // wait for the response
            .then(async function(temp) {
                // Contract after deployed
                GiveTogether = temp;
                // Testing various functions
                var response = GiveTogether.withdraw({
                    from: accounts[0]
                });
                console.log(response)
            })
    });
    // it("Number of Charities greater than 0", function() {
    //     GiveTogether.deployed() // wait for the response
    //         .then(async function(temp) {
    //             // Contract after deployed
    //             GiveTogether = temp;
    //             // Testing various functions
    //             return await GiveTogether.getCharities();
    //         })
    //         .then(function(response) {
    //             listOfCharities = response;
    //             // Assertions for tests
    //             // no need to test getNumCharities since length is accounted for here
    //             expect(response).to.have.length.above(0);
    //         });
    // });
    // it("Owner equal to " + ownerAddr, function() {
    //     var owner = GiveTogether.getOwner();
    //     owner.then(function(response) {
    //         expect(response).to.equal(ownerAddr);
    //     });
    // });
    // it("Current Charity in list of charities", function() {
    //     var currentCharity = GiveTogether.getCurrentCharity();
    //     currentCharity.then(function(response) {
    //         currentCharityAddr = response;
    //         expect(listOfCharities).to.include(response);
    //     });
    // });
    // it("Get Charity address, name, website", function() {
    //     var charity = GiveTogether.charities(listOfCharities[0]);
    //     charity.then(function(response) {
    //         expect(response.name).to.not.be.undefined;
    //         expect(response.website).to.not.be.undefined;
    //     });
    // });
    // it("Add charity as owner", function() {
    //     var address = accounts[1];
    //     var name = "Test";
    //     var website = "test.com";
    //     var addCharity = GiveTogether.addCharity(address, name, website, {
    //         from: accounts[0]
    //     });
    //     addCharity
    //         .then(async function(tx) {
    //             return await GiveTogether.getCharities();
    //         })
    //         .then(async function(response) {
    //             listOfCharities = response;
    //             // Setting number of charities
    //             numCharities = await GiveTogether.getNumCharities();
    //             expect(listOfCharities).to.include(address);
    //             console.log("      Number of Charities: " + response.length);
    //         });
    // });
    // it("Add charity that is already there as owner", async function() {
    //     var address = "0xd3f81260a44a1df7a7269cf66abd9c7e4f8cdcd1";
    //     var name = "Test";
    //     var website = "test.com";
    //     try {
    //         await GiveTogether.addCharity(address, name, website, {
    //             from: accounts[0]
    //         });
    //     } catch (error) {
    //         err = error;
    //     }
    //     assert.ok(err instanceof Error);
    // });
    // it("Add charity not owner", async function() {
    //     var address = accounts[2];
    //     var name = "Local Acc2";
    //     var website = "localacc2.com";
    //     try {
    //         await GiveTogether.addCharity(address, name, website, {
    //             from: accounts[2]
    //         });
    //     } catch (error) {
    //         err = error;
    //     }
    //     assert.ok(err instanceof Error);
    // });
    // it("Generate new charity as owner", function() {
    //     var initialCharity = GiveTogether.getCurrentCharity();
    //     var initialAddr = "0x1";
    //     var newAddr = "0x2";
    //     initialCharity.then(async function(response) {
    //         initialAddr = response;
    //         var generateCharity = GiveTogether.generateNewCharity();
    //         generateCharity
    //             .then(async function(tx) {
    //                 return await GiveTogether.getCurrentCharity();
    //             })
    //             .then(function(response) {
    //                 newAddr = response;
    //                 console.log("      Old Address:" + initialAddr);
    //                 console.log("      New Address:" + newAddr);
    //                 // Will fail sometimes when same charity is generated
    //                 // just run the test again will be solved when a certain
    //                 // number of charities are added
    //                 expect(newAddr).to.not.equal(initialAddr);
    //             });
    //     });
    // });
    // it("Generate new charity not owner", async function() {
    //     try {
    //         await GiveTogether.generateNewCharity({
    //             from: accounts[3]
    //         });
    //     } catch (error) {
    //         err = error;
    //     }
    //     assert.ok(err instanceof Error);
    // });
    // it("Remove charity not owner", async function() {
    //     try {
    //         await GiveTogether.removeCharity(accounts[2], {
    //             from: accounts[2]
    //         });
    //     } catch (error) {
    //         err = error;
    //     }
    //     assert.ok(err instanceof Error);
    // });
    // it("Remove charity as owner", function() {
    //     var address = "0xD3F81260a44A1df7A7269CF66Abd9c7e4f8CdcD1";
    //     var removeCharity = GiveTogether.removeCharity(address);
    //     removeCharity.then(async function(tx) {
    //         try {
    //             await GiveTogether.getCharities(address);
    //         } catch (error) {
    //             err = error;
    //         }
    //         assert.ok(err instanceof Error);
    //     });
    // });
    // it("Getting donation", function() {
    //     var getDonation = GiveTogether.getTotalDonation();
    //     getDonation.then(function(response) {
    //         expect(response.words[0]).to.equal(0);
    //     });
    // });
});