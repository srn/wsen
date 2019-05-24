const PacketWriter = require('./PacketWriter')

function handleProxy(socket) {
  const packetWriter = new PacketWriter()
  packetWriter.writeString('192.168.86.28:8100')

  const data = packetWriter.readDataToSend(true)

  socket.write(data)
  socket.end()
}

module.exports = handleProxy
