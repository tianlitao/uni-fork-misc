import { ethers } from "hardhat";

const tokens = [
  {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  {
    name: "USDCoin",
    symbol: "USDC",
    decimals: 6,
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
  },
  {
    name: "ChainLink Token",
    symbol: "LINK",
    decimals: 18,
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
  },
];

async function main() {
  const WCKB = await ethers.getContractFactory("WCKB");
  const wCKB = await WCKB.deploy();
  await wCKB.deployed();
  console.log("WCKB deployed to:", wCKB.address);

  const MockERC20 = await ethers.getContractFactory("MockERC20");

  for (let i = 0; i < tokens.length; i++) {
    const mockERC20 = await MockERC20.deploy(
      tokens[i].name,
      tokens[i].symbol,
      tokens[i].decimals
    );
    await mockERC20.deployed();
    console.log(`${tokens[i].symbol} deployed to: ${mockERC20.address}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
