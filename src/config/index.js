const config = {
  ipfs: {
    preload: {
      enabled: false
    },
    config: {
      Addresses: {
        Swarm: [
          '/dns4/planethub.de/tcp/433/wss/p2p-webrtc-star'
        ]
      }
    }
  }
}

export default config
