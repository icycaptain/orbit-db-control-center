const config = {
  ipfs: {
    preload: {
      enabled: false
    },
    config: {
      Addresses: {
        Swarm: [
          '/dns4/planethub.de/tcp/443/wss/p2p-webrtc-star'
        ]
      },
      Bootstrap: []
    }
  }
}

export default config
