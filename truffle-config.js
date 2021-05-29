require("dotenv").config()

const host = process.env.VITE_ETHER_HOST
const port = process.env.VITE_ETHER_PORT
const network_id = process.env.VITE_ETHER_NETWORK_ID

module.exports = {
    contracts_build_directory: "./contracts-output",
    networks: {
        development: {
            host,
            port,
            network_id,
        },
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
}
