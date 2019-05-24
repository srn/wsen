const PacketWriter = require('../network/PacketWriter')

const OpCodes = require('../constants/OpCodes')

function handlePing(packet, world) {
  const writer = new PacketWriter(OpCodes.SMSG_PONG)
  writer.writeUInt32(packet.readUInt32())

  return world.send(writer)
}

module.exports = handlePing
