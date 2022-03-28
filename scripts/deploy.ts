import { ethers } from "hardhat";

async function main() {
  const UniswapInterfaceMulticall = await ethers.getContractFactory(
    "UniswapInterfaceMulticall"
  );
  const uniswapInterfaceMulticall = await UniswapInterfaceMulticall.deploy();

  await uniswapInterfaceMulticall.deployed();

  console.log(
    "UniswapInterfaceMulticall deployed to:",
    uniswapInterfaceMulticall.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
