require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purchase install clock bridge tube'; 
let testAccounts = [
"0x2a53cb29828aaceb07e18e605dd46223342cf4c308167c3b2c3fd48af2d916aa",
"0x3f6b3723eb0bf292e4f752d24e442b3ddf53951e807c544c7e0824167c51cb01",
"0x56d385df8c164e13d285967fa8bf4a93f56d0feb6de633c8f8fba2e5e7766368",
"0x735f0bb69103b632ab8ea3e216772c49719d3e89ed00644a3c4a1c07bd762131",
"0xbfa9714e577a83c52bdfc4b89a1ef525366c1b0d581851d628110d09f5778265",
"0x41c9696a695498445d515ed7eedfd291252eaa82faf4e2926313f5b0d4736a26",
"0xf484398e13ce7c512452b2fd4e614e3f4f2b815816e72b75e4b6d988e4bb0105",
"0xff0204292532e43e29baa5675caf77f721c6c38d1e3cd8da79c395cd35ad78e1",
"0x66b9f1de02743a3b7aa70b32b3f04fec3fbcbee4638060d24b2dbf8bc8ee6efe",
"0x87935018b77eeaa602e21446ac89d1cf7632d9691cc25a4439eb7246e8ad0994"
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

