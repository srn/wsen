function realloc(writer, size) {
  const needed = writer._length + size

  if (writer._buffer.length >= needed) {
    return
  }

  const chunk = Math.max(Buffer.poolSize / 2, 1024)
  let chunkCount = (needed / chunk) >>> 0

  if (needed % chunk > 0) {
    chunkCount += 1
  }

  buffer = Buffer.alloc(chunkCount * chunk)
  writer._buffer.copy(buffer, 0, 0, writer._length)
  writer._buffer = buffer
}

class BinaryWriter {
  constructor(size) {
    if (!size || size <= 0) {
      size = Buffer.poolSize / 2
    }

    this._buffer = Buffer.alloc(size)
    this._length = 0
  }

  writeUInt8(value) {
    realloc(this, 1)

    this._buffer[this._length++] = value
  }

  writeInt8(value) {
    realloc(this, 1)

    this._buffer[this._length++] = value
  }

  writeUInt16(value) {
    realloc(this, 2)

    this._buffer[this._length++] = value
    this._buffer[this._length++] = value >> 8
  }

  writeInt16(value) {
    realloc(this, 2)

    this._buffer[this._length++] = value
    this._buffer[this._length++] = value >> 8
  }

  writeUInt32(value) {
    realloc(this, 4)

    this._buffer[this._length++] = value
    this._buffer[this._length++] = value >> 8
    this._buffer[this._length++] = value >> 16
    this._buffer[this._length++] = value >> 24
  }

  writeInt32(value) {
    realloc(this, 4)

    this._buffer[this._length++] = value
    this._buffer[this._length++] = value >> 8
    this._buffer[this._length++] = value >> 16
    this._buffer[this._length++] = value >> 24
  }

  writeFloat(value) {
    realloc(this, 4)

    this._buffer.writeFloatLE(value, this._length)
    this._length += 4
  }

  writeDouble(value) {
    realloc(this, 8)

    this._buffer.writeDoubleLE(value, this._length)
    this._length += 8
  }

  writeBytes(data) {
    realloc(this, data.length)

    data.copy(this._buffer, this._length, 0, data.length)
    this._length += data.length
  }

  writeString(value, encoding = 'ascii') {
    let length = Buffer.byteLength(value, encoding)

    realloc(this, length)

    this._buffer.write(value, this._length, length, encoding)
    this._length += length

    this.writeUInt8(0) // null terminated
  }

  get length() {
    return this._length
  }
}

BinaryWriter.realloc = realloc

module.exports = BinaryWriter
