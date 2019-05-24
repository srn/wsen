const OpCodes = require('../constants/OpCodes')

const AuthHandler = require('./AuthHandler')
const LoginHandler = require('./LoginHandler')
const PingHandler = require('./PingHandler')

const handlers = {
  [OpCodes.CMSG_AUTH_SESSION]: AuthHandler,
  [OpCodes.CMSG_CHAR_ENUM]: LoginHandler.handleCharEnum,
  [OpCodes.CMSG_PING]: PingHandler,
  [OpCodes.CMSG_CHAR_CREATE]: LoginHandler.handleCharCreate,
  [OpCodes.CMSG_PLAYER_LOGIN]: LoginHandler.handlePlayerLogin,
  [OpCodes.CMSG_NAME_QUERY]: LoginHandler.handleNameQuery
}

module.exports = function(packet, world) {
  const handler = handlers[packet.opcode]

  if (!handler) {
    return console.log('handler', 'could not find handler for', packet.opcode)
  }

  handler(packet, world)
}
