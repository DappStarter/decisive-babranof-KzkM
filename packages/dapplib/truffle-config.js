require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain equip give narrow fortune tennis'; 
let testAccounts = [
"0x015d63dd3e70e13d3dda9d95c3e2b830d34b7b261b8788378a6bb6ed425e3e8c",
"0x90d61774ab95e48c02629b6b6963c9907c41d43cd656aaa62e64df463a6a83ff",
"0x9ec7a0403345fc3cbd566c14f897ec2c5060e1c2b07cf3ea1dde690455e29eae",
"0xd1785f5a92c2c080749b18e65b4a60c9c30416f5a179e57a9a1b2778315e66ab",
"0x5b08e2750d96f6ecc0889251a0d7478fc73a74c43d5d3bf720774515bc20c575",
"0x71dd651eaa446d5761b2457f181a3b5c640218dc1a336fbef9b11504e127b18d",
"0xa5f4e3cbe4f92dc6989a574c16b6554f0751191885b0f638b7becbe5cf355df9",
"0xb5cda939b4a28286d7d5c99e6406aa426abcb47442f5fe887533997d2d75b5f9",
"0x37c799aa3a77ad0fe6c8b33205bd2369a1d7827ab6d130779642dc49fb0e8882",
"0x1a097532a1303e168e6df116c7ccd2ff761ac3fe4155667833ae78695aeb0b6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

