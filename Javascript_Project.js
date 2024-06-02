// create a variable to hold your NFT's
let NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, image) {
    let NFT = {
        name: name,
        description: description,
        image: image
    };
    NFTs.push(NFT);
    console.log("Minted NFT: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\n#NFT \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Description: \t" + NFTs[i].description);
        console.log("Image: \t\t" + NFTs[i].image);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n TotalNFTCount = " + NFTs.length);
}

// call your functions below this line
mintNFT("kapil", "CSE Student", "image1.png");
mintNFT("om", "Electronics Student", "image2.png");
listNFTs();
getTotalSupply();