const hre = require("hardhat");

async function main() {
  const stableCoinAddress = "0x000000000000000000000000000000000033ced6";
  const swapRouterAddress = "0x000000000000000000000000000000000033cecb";
  const slippage = 5;

  const pagoLink = await hre.ethers.deployContract("PagoLink", [stableCoinAddress, swapRouterAddress, slippage]);

  await pagoLink.waitForDeployment();

  console.log(
    `PagoLink deployed to ${pagoLink.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
