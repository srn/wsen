const BinaryReader = require('./BinaryReader')

class PacketReader extends BinaryReader {
  constructor(buffer, worldPacket = true) {
    super(buffer)

    // Packet header (0.5.3.3368): Size: 2 bytes + Cmd: 4 bytes
    if (worldPacket) {
      this.size = this.readUInt16() / 0x100 - 4
      this.opcode = this.readUInt32()
    }
  }
}

module.exports = PacketReader
