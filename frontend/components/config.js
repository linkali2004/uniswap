import { http, createConfig } from 'wagmi'
import { localhost, mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia,localhost],
  connectors: [
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [localhost.id]: http()
  },
})