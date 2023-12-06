const hre = require("hardhat");

async function main() {
  const stableCoinAddress = "0x81238081bfe3483Ab93224CF259FaefFfccd1d68";
  const swapRouterAddress = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";
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
