const PacketWriter = require('./PacketWriter')

function handleRealm(socket) {
  const packetWriter = new PacketWriter()
  packetWriter.writeUInt8(1)
  packetWriter.writeString('|cFF00FFFFAlpha Test Realm')
  packetWriter.writeString('192.168.86.28:9090') // FIXME: use constants
  packetWriter.writeUInt32(0)

  const data = packetWriter.readDataToSend(true)

  socket.write(data)
  socket.end()
}

module.exports = handleRealm
