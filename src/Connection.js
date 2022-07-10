navigator.getUserMedia(
    { video: false, audio: true },
    (stream) => {
        getPeerConnectionSDP(stream)
    },
    (error) => {
        throw new Error(error)
    }
)

const getPeerConnectionSDP = (stream) => {
    const pc = new RTCPeerConnection({
        offerToReceiveAudio: true,
        offerToReceiveVideo: false,
        iceServers: []
    })

    stream.getTracks().forEach((track) => pc.addTrack(track, stream))

    pc.createOffer()
        .then((offer) => {
            console.log(offer.sdp)
            console.log(pc)
        })
        .catch((e) => {
            console.error(e)
        })
}
