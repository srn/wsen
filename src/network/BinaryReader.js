class BinaryReader {
  constructor(buffer) {
    this._offset = 0
    this._buffer = Buffer.from(buffer)
  }

  readUInt8() {
    var value = this._buffer.readUInt8(this._offset)
    this._offset += 1
    return value
  }

  readInt8() {
    var value = this._buffer.readInt8(this._offset)
    this._offset += 1
    return value
  }

  readUInt16() {
    var value = this._buffer.readUInt16LE(this._offset)
    this._offset += 2
    return value
  }

  readInt16() {
    var value = this._buffer.readInt16LE(this._offset)
    this._offset += 2
    return value
  }

  readUInt32() {
    var value = this._buffer.readUInt32LE(this._offset)
    this._offset += 4
    return value
  }

  readInt32() {
    var value = this._buffer.readInt32LE(this._offset)
    this._offset += 4
    return value
  }

  readFloat() {
    var value = this._buffer.readFloatLE(this._offset)
    this._offset += 4
    return value
  }

  readDouble() {
    var value = this._buffer.readDoubleLE(this._offset)
    this._offset += 8
    return value
  }

  readByte() {
    return this.readUInt8()
  }

  readBytes(length) {
    var value = this._buffer.slice(this._offset, this._offset + length)
    this._offset += length
    return value
  }

  skipBytes(length) {
    this._offset += length
  }

  readString() {
    let length = 0
    let terminatorLength = 0

    for (let i = this._offset; i < this._buffer.length; i++) {
      if (this._buffer.readUInt8(i) == 0) {
        terminatorLength = 1
        break
      }

      length++
    }

    const value = this.readStringUtf8(length)

    this._offset += terminatorLength

    return value
  }

  readStringUtf8(length) {
    if (length == null) {
      length = this._buffer.length - this._offset
    }

    length = Math.max(0, length)

    const value = this._buffer.toString(
      'utf8',
      this._offset,
      this._offset + length
    )

    this._offset += length

    return value
  }
}

module.exports = BinaryReader
