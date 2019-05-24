const PacketWriter = require('../network/PacketWriter')

const OpCodes = require('../constants/OpCodes')
const CharCodes = require('../constants/CharCodes')
const InventoryTypeConstants = require('../constants/InventoryTypeConstants')

const WorldObject = require('../objects/WorldObject')

let character

function createCharacter(packet) {
  character = {
    guid: 1,
    name: packet.readString(),

    race: packet.readByte(),
    class: packet.readByte(),
    gender: packet.readByte(),
    skin: packet.readByte(),
    face: packet.readByte(),
    hairStyle: packet.readByte(),
    hairColour: packet.readByte(),
    facialHair: packet.readByte()
  }
}

function getCharacter(writer) {
  writer.writeDouble(character.guid)
  writer.writeString(character.name)

  writer.writeUInt8(character.race) // race
  writer.writeUInt8(character.class) // class
  writer.writeUInt8(character.gender) // gender
  writer.writeUInt8(character.skin) // skin
  writer.writeUInt8(character.face) // face
  writer.writeUInt8(character.hairStyle) // hairstyle
  writer.writeUInt8(character.hairColour) // haircolour
  writer.writeUInt8(character.facialHair) // facialhair
  writer.writeUInt8(12) // level

  writer.writeUInt32(12) // zone
  writer.writeUInt32(0) // map

  writer.writeFloat(-8949.95) // x
  writer.writeFloat(-132.493) // y
  writer.writeFloat(83.5312) // z

  writer.writeUInt32(0) // guildguid
  writer.writeUInt32(0) // petdisplayinfo
  writer.writeUInt32(0) // petlevel
  writer.writeUInt32(0) // petfamily

  Object.keys(InventoryTypeConstants).forEach(key => {
    writer.writeUInt32(0)
    writer.writeUInt8(0)
  })
}

function handleNameQuery(packet, world) {
  const nameQuery = new PacketWriter(OpCodes.SMSG_NAME_QUERY_RESPONSE)
  nameQuery.writeDouble(character.guid)
  nameQuery.writeString(character.name)
  nameQuery.writeUInt32(character.race)
  nameQuery.writeUInt32(character.gender)
  nameQuery.writeUInt32(character.class)

  world.send(nameQuery)
}

function handleLoginSetTimespeed(packet, world) {
  const date = new Date()

  const year = date.getFullYear() - 2000
  const month = date.getMonth()
  const dayOfMonth = date.getDate()
  const dayOfWeek = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()

  const time =
    minute +
    (hour << 6) +
    (dayOfWeek << 11) +
    (dayOfMonth << 14) +
    (month << 20) +
    (year << 24)

  const writer = new PacketWriter(OpCodes.SMSG_LOGIN_SETTIMESPEED)
  writer.writeInt32(time)
  writer.writeFloat(0.01666667)

  world.send(writer)
}

module.exports = {
  handleCharEnum(packet, world) {
    const writer = new PacketWriter(OpCodes.SMSG_CHAR_ENUM)

    writer.writeUInt8(character ? 1 : 0)

    if (character) {
      getCharacter(writer)
    }

    world.send(writer)
  },

  handleCharCreate(packet, world) {
    const writer = new PacketWriter(OpCodes.SMSG_CHAR_CREATE)
    writer.writeUInt8(CharCodes.CHAR_CREATE_SUCCESS)

    createCharacter(packet)

    world.send(writer)
  },

  handlePlayerLogin(packet, world) {
    handleLoginSetTimespeed(packet, world)

    const spells = new PacketWriter(OpCodes.SMSG_INITIAL_SPELLS)
    spells.writeUInt8(0)
    spells.writeUInt16(0)
    spells.writeUInt16(0)
    world.send(spells)

    const motd = new PacketWriter(OpCodes.SMSG_MESSAGECHAT)
    motd.writeUInt8(0x09) // CHAT_MSG_SYSTEM
    motd.writeUInt32(0)
    motd.writeDouble(character.Guid)
    motd.writeString('Skrrt skrrt')
    motd.writeUInt8(0) // CHAT_TAG_NONE
    world.send(motd)

    handleNameQuery(packet, world)

    world.send(WorldObject.buildUpdate(character))
  },

  handleNameQuery
}
