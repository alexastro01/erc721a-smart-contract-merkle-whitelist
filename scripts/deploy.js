async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy('0xa5409ec958C83C3f309868babACA7c86DCB077c1')
    await myNFT.deployed()
   
    console.log("Contract deployed to address: goodluck, //// /////", myNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  