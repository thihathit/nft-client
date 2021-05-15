import { reactive } from "vue"
import { providers } from "ethers"

const Node = import.meta.env.VITE_ETHER_NODE

export const defaultState = {
    ready: false,
}

export const state = reactive(defaultState)

export const init = async () => {
    const Provider = new providers.JsonRpcProvider(Node)

    const Signer = Provider.getSigner()
    const Block = await Provider.getBlockNumber()
    // console.log(Block)
}
