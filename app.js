const CryptoJS = require("crypto-js");

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

class BlockChain {
    constructor() {
        const genesis = new Block('gen-data', CryptoJS.SHA256('gen-hash').toString(CryptoJS.enc.Hex), '');
        this.chain = [genesis];
    }

    addBlock(data) {
        const lastHash = this.chain[this.chain.length-1].hash;

        const hash = CryptoJS.SHA256(data + lastHash);

        const block = new Block(data, hash.toString(CryptoJS.enc.Hex), lastHash);

        this.chain.push(block);
    }
}

const myBlockChain = new BlockChain();
myBlockChain.addBlock('one');
myBlockChain.addBlock('two');
myBlockChain.addBlock('three');

console.log(myBlockChain);