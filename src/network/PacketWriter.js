const zlib = require('zlib')

const BinaryWriter = require('./BinaryWriter')

const OpCodes = require('../constants/OpCodes')

class PacketWriter extends BinaryWriter {
  constructor(opcode) {
    super()

    if (opcode) {
      this.opcode = opcode
      this.writePacketHeader()
    }
  }

  writePacketHeader() {
    // Packet header for SMSG_AUTH_CHALLENGE : Size: 2 bytes + Cmd: 2 bytes
    // Packet header : Size: 2 bytes + Cmd: 4 bytes
    this.writeUInt8(0)
    this.writeUInt8(0)
    this.writeUInt8(this.opcode % 0x100)
    this.writeUInt8(this.opcode / 0x100)

    if (this.opcode !== OpCodes.SMSG_AUTH_CHALLENGE) {
      this.writeUInt8(0)
      this.writeUInt8(0)
    }
  }

  readDataToSend(isAuthPacket = false) {
    const buffer = Buffer.alloc(this.length)

    for (let i = 0; i < this.length; i++) {
      buffer[i] = this._buffer.readUInt8(i)
    }

    if (!isAuthPacket) {
      const length = this.length - 2

      buffer[0] = length / 0x100
      buffer[1] = length % 0x100
    }

    return buffer
  }

  static compress(packet) {
    const headerSize = 6
    const baseSize = packet.length - headerSize // minus header size

    const data = packet.readDataToSend()
    const toCompress = Buffer.from(data, headerSize, data.length - headerSize)
    const deflated = zlib.deflateSync(toCompress)

    const writer = new PacketWriter(OpCodes.SMSG_COMPRESSED_UPDATE_OBJECT)
    writer.writeInt32(baseSize)
    writer.writeBytes(deflated)

    return writer
  }
}

module.exports = PacketWriter
