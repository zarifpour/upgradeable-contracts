// const { ethers, upgrades } = require('hardhat')
// Statement above is already pulled in from hardhat.config.js

const { upgrades } = require("hardhat")

async function main() {
    const Box = await ethers.getContractFactory("Box")
    console.log("Deploying proxy, box implementation, and proxy admin...")
    const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
    console.log("BoxProxy deployed to:", boxProxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })