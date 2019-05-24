const PacketWriter = require('../network/PacketWriter')

const OpCodes = require('../constants/OpCodes')
const CHARCTER_FIELDS = require('../constants/CharacterFields')

const DEFAULT_MASK_SIZE = parseInt((634 + 31) / 32, 10)

class UpdateClass {
  constructor() {
    this.values = {}
  }

  updateValue(position, value, type = 'uint', increment = 0) {
    this.values[position] = {
      value,
      type,
      increment
    }
  }

  buildPacket(packet) {
    Object.keys(CHARCTER_FIELDS).forEach(key => {
      const position = CHARCTER_FIELDS[key]

      if (this.values.hasOwnProperty(position)) {
        let { value, type } = this.values[position]

        switch (type) {
          case 'uint':
            packet.writeUInt32(value)
            break
          case 'double':
            packet.writeDouble(value)
            break
          case 'float':
            packet.writeFloat(value)
            break
        }
      } else {
        packet.writeInt32(0)
      }
    })

    return packet
  }
}

module.exports = {
  buildUpdate(character) {
    const packet = new PacketWriter(OpCodes.SMSG_UPDATE_OBJECT)
    packet.writeUInt32(1) // number of transactions
    packet.writeUInt8(2) // update type
    packet.writeDouble(character.guid) // guid
    packet.writeUInt8(4) // type, 4 = Player

    // tansport
    packet.writeDouble(0) // transport guid
    packet.writeFloat(0.0) // x
    packet.writeFloat(0.0) // y
    packet.writeFloat(0.0) // z
    packet.writeFloat(0.0) // w // o

    // location
    packet.writeFloat(-8949.95) // x
    packet.writeFloat(-132.493) // y
    packet.writeFloat(83.5312) // z
    packet.writeFloat(0.0) // w // o

    packet.writeFloat(0) // pitch

    packet.writeUInt32(0) // movementflags
    packet.writeUInt32(0) // falltime?

    // speed
    packet.writeFloat(2.5) //walkspeed
    packet.writeFloat(7.0) // runningspeed
    packet.writeFloat(4.7222223) // swimspeed
    packet.writeFloat(3.141593) // turnrate

    // flags
    packet.writeUInt32(1) // flags, 1 - Player, 0 - Bot
    packet.writeUInt32(1) // attackcycle
    packet.writeUInt32(0) // timerid
    packet.writeDouble(0) // // victimguid

    // mask
    packet.writeUInt8(DEFAULT_MASK_SIZE)
    for (let i = 0; i < DEFAULT_MASK_SIZE; i++) {
      packet.writeUInt32(4294967295) // UInt32 maxvalue
    }

    const uc = new UpdateClass()

    // object fields
    uc.updateValue(CHARCTER_FIELDS.OBJECT_FIELD_GUID, character.guid, 'double')
    uc.updateValue(CHARCTER_FIELDS.OBJECT_FIELD_TYPE, 0x19) // 0x19 (player)
    uc.updateValue(CHARCTER_FIELDS.OBJECT_FIELD_ENTRY, 0)
    uc.updateValue(CHARCTER_FIELDS.OBJECT_FIELD_SCALE_X, 1.0, 'float')

    // unit fields
    uc.updateValue(22, 100) // health
    uc.updateValue(23, 100) // power1 - mana
    uc.updateValue(24, 0) // power2 - rage
    uc.updateValue(25, 0) // power3 - focus
    uc.updateValue(26, 0) // power4 - energy
    uc.updateValue(27, 100) // max health
    uc.updateValue(28, 100) // max power1
    uc.updateValue(29, 0) // max power2
    uc.updateValue(30, 0) // max power3
    uc.updateValue(31, 0) // max power4

    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_LEVEL, 12) // level
    uc.updateValue(
      CHARCTER_FIELDS.UNIT_FIELD_BYTES_0,
      character.race |
        (character.class << 8) |
        (character.gender << 16) |
        (0 << 24)
    ) // unit bytes 0 - race, class, gender, power type
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_BYTES_1, 0) // unit bytes 1 - stand state

    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_STAT0, 0) // stat0 - strength
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_STAT1, 0) // stat1 - agility
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_STAT2, 0) // stat2 - stamina
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_STAT3, 0) // stat3 - intellect
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_STAT4, 0) // stat4 - spirit
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_BASESTAT0, 0) // base stat0 - strength
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_BASESTAT1, 0) // base stat1 - agility
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_BASESTAT2, 0) // base stat2 - stamina
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_BASESTAT3, 0) // base stat3 - intellect
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_BASESTAT4, 0) // base stat4 - spirit

    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_DISPLAYID, 0x31) // display id
    uc.updateValue(CHARCTER_FIELDS.UNIT_FIELD_MOUNTDISPLAYID, 0) // mount display id

    // player fields
    uc.updateValue(CHARCTER_FIELDS.PLAYER_FIELD_NUM_INV_SLOTS, 14) // inventory slots
    uc.updateValue(
      CHARCTER_FIELDS.PLAYER_BYTES,
      character.skin |
        (character.face << 8) |
        (character.hairStyle << 16) |
        (character.hairColour << 24)
    ) // player bytes (skin, face, hairstyle, harcolour)

    uc.updateValue(CHARCTER_FIELDS.PLAYER_XP, 47) // xp
    uc.updateValue(CHARCTER_FIELDS.PLAYER_NEXT_LEVEL_XP, 200) // next level xp

    uc.updateValue(
      CHARCTER_FIELDS.PLAYER_BYTES_2,
      0 | (character.facialHair << 16)
    ) // player bytes 2
    uc.updateValue(CHARCTER_FIELDS.PLAYER_BASE_MANA, 100) // base mana

    uc.buildPacket(packet)

    return packet
  }
}
