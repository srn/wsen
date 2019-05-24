const net = require('net')

const PacketReader = require('./src/network/PacketReader')
const PacketWriter = require('./src/network/PacketWriter')

const realm = require('./src/network/realm')
const proxy = require('./src/network/proxy')

const OpCodes = require('./src/constants/OpCodes')

const handler = require('./src/handlers')

const REALM_PORT = 9100
const PROXY_PORT = 9090
const WORLD_PORT = 8100
const CLIENT_VERSION = 3368

const realmServer = new net.Server()

realmServer.listen(REALM_PORT, function() {
  console.log('realm', `listening on socket localhost:${REALM_PORT}`)

  const proxyServer = new net.Server()

  proxyServer.listen(PROXY_PORT, function() {
    console.log('proxy', `listening on socket localhost:${PROXY_PORT}`)
  })

  proxyServer.on('connection', function(socket) {
    console.log('proxy', 'A new connection has been established')

    socket.on('data', function(chunk) {
      console.log('proxy', 'data', chunk)
    })

    socket.on('error', function(err) {
      console.log('proxy', 'error', err)
    })

    socket.on('timeout', function() {
      console.log('proxy', 'timeout')
    })

    socket.on('close', function() {
      console.log('proxy', 'close')
    })

    proxy(socket)
  })
})

realmServer.on('connection', function(socket) {
  console.log('realm', 'A new connection has been established')

  socket.on('data', function(chunk) {
    console.log('realm', 'data', chunk)
  })

  socket.on('error', function(err) {
    console.log('realm', 'error', err)
  })

  socket.on('timeout', function() {
    console.log('realm', 'timeout')
  })

  socket.on('close', function() {
    console.log('realm', 'close')
  })

  realm(socket)
})

const worldServer = new net.Server()
worldServer.listen(WORLD_PORT, function() {
  console.log(`world listening on socket localhost:${WORLD_PORT}`)
})

worldServer.on('connection', function(socket) {
  console.log('world', 'A new connection has been established.')

  const packetWriter = new PacketWriter(OpCodes.SMSG_AUTH_CHALLENGE)
  packetWriter.writeUInt8(0)
  packetWriter.writeUInt8(0)
  packetWriter.writeUInt8(0)
  packetWriter.writeUInt8(0)
  packetWriter.writeUInt8(0)
  packetWriter.writeUInt8(0)

  socket.write(packetWriter.readDataToSend())

  const world = {
    send(packetWriter) {
      console.log(
        'world',
        'send',
        packetWriter.opcode,
        OpCodes.getByUpCode(packetWriter.opcode)
      )

      socket.write(packetWriter.readDataToSend())
    }
  }

  socket.on('data', function(buffer) {
    console.log('world', 'data', buffer)

    const packetReader = new PacketReader(buffer)
    const opCode = OpCodes.getByUpCode(packetReader.opcode)

    if (opCode) {
      console.log('world', 'received OpCode', packetReader.opcode, opCode)
    } else {
      console.log('world', 'unknown OpCode', packetReader.opcode)
    }

    handler(packetReader, world)
  })

  socket.on('timeout', function() {
    console.log('world', 'timeout')
  })

  socket.on('close', function() {
    console.log('world', 'close')
  })

  socket.on('error', function(err) {
    console.log('world', 'error', err)
  })
})
