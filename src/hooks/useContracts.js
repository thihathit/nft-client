import { inject } from "vue"
import { providers, Contract } from "ethers"

export const useContracts = () => {
    const { NetworkID, Contracts: Conts } = inject("services/network")

    const Provider = new providers.Web3Provider(window.ethereum)
    const Signer = Provider.getSigner()

    const contracts = {}

    for (const contractName in Conts) {
        const Cont = Conts[contractName]
        const abiData = Cont.abi
        const address = Cont.networks[NetworkID].address

        const contractObject = new Contract(address, abiData, Provider)

        contracts[contractName] = {
            read: contractObject,
            write: contractObject.connect(Signer),
        }
    }

    return {
        contracts,
        signer: Signer,
        provider: Provider,
    }
}
