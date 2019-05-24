const PacketWriter = require('../network/PacketWriter')

const OpCodes = require('../constants/OpCodes')
const AuthCodes = require('../constants/AuthCodes')

function handleAuthSession(packetReader, world) {
  const writer = new PacketWriter(OpCodes.SMSG_AUTH_RESPONSE)

  const version = packetReader.readUInt32()
  packetReader.readUInt32()

  const auth = packetReader.readString().split('\n')
  if (auth.length !== 2) {
    writer.writeUInt8(AuthCodes.AUTH_UNKNOWN_ACCOUNT)
  } else {
    writer.writeUInt8(AuthCodes.AUTH_OK)
  }

  return world.send(writer)
}

module.exports = handleAuthSession
