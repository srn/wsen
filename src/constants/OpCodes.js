const OpCodes = {
  CMSG_DBLOOKUP: 0x0002,
  SMSG_DBLOOKUP: 0x0003,
  CMSG_QUERY_OBJECT_POSITION: 0x0004,
  SMSG_QUERY_OBJECT_POSITION: 0x0005,
  CMSG_QUERY_OBJECT_ROTATION: 0x0006,
  SMSG_QUERY_OBJECT_ROTATION: 0x0007,
  CMSG_WORLD_TELEPORT: 0x0008,
  CMSG_TELEPORT_TO_PLAYER: 0x0009,
  CMSG_ZONE_MAP: 0x000a,
  SMSG_ZONE_MAP: 0x000b,
  CMSG_DEBUG_CHANGECELLZONE: 0x000c,
  CMSG_EMBLAZON_TABARD_OBSOLETE: 0x000d,
  CMSG_UNEMBLAZON_TABARD_OBSOLETE: 0x000e,
  CMSG_RECHARGE: 0x000f,
  CMSG_LEARN_SPELL: 0x0010,
  CMSG_CREATEMONSTER: 0x0011,
  CMSG_DESTROYMONSTER: 0x0012,
  CMSG_CREATEITEM: 0x0013,
  CMSG_CREATEGAMEOBJECT: 0x0014,
  CMSG_MAKEMONSTERATTACKME: 0x0015,
  CMSG_MAKEMONSTERATTACKGUID: 0x0016,
  CMSG_ENABLEDEBUGCOMBATLOGGING: 0x0017,
  CMSG_FORCEACTION: 0x0018,
  CMSG_FORCEACTIONONOTHER: 0x0019,
  CMSG_FORCEACTIONSHOW: 0x001a,
  SMSG_FORCEACTIONSHOW: 0x001b,
  SMSG_ATTACKERSTATEUPDATEDEBUGINFO: 0x001c,
  SMSG_ATTACKERSTATEUPDATEDEBUGINFOSPELL: 0x001d,
  SMSG_ATTACKERSTATEUPDATEDEBUGINFOSPELLMISS: 0x001e,
  SMSG_DEBUG_PLAYER_RANGE: 0x001f,
  CMSG_UNDRESSPLAYER: 0x0020,
  CMSG_BEASTMASTER: 0x0021,
  CMSG_GODMODE: 0x0022,
  SMSG_GODMODE: 0x0023,
  CMSG_CHEAT_SETMONEY: 0x0024,
  CMSG_LEVEL_CHEAT: 0x0025,
  CMSG_PET_LEVEL_CHEAT: 0x0026,
  CMSG_LEVELUP_CHEAT: 0x0027,
  CMSG_COOLDOWN_CHEAT: 0x0028,
  CMSG_USE_SKILL_CHEAT: 0x0029,
  CMSG_FLAG_QUEST: 0x002a,
  CMSG_FLAG_QUEST_FINISH: 0x002b,
  CMSG_CLEAR_QUEST: 0x002c,
  CMSG_SEND_EVENT: 0x002d,
  CMSG_DEBUG_AISTATE: 0x002e,
  SMSG_DEBUG_AISTATE: 0x002f,
  CMSG_ENABLE_PVP: 0x0030,
  CMSG_ADVANCE_SPAWN_TIME: 0x0031,
  CMSG_PVP_PORT: 0x0032,
  CMSG_AUTH_SRP6_BEGIN: 0x0033,
  CMSG_AUTH_SRP6_PROOF: 0x0034,
  CMSG_AUTH_SRP6_RECODE: 0x0035,
  CMSG_CHAR_CREATE: 0x0036,
  CMSG_CHAR_ENUM: 0x0037,
  CMSG_CHAR_DELETE: 0x0038,
  SMSG_AUTH_SRP6_RESPONSE: 0x0039,
  SMSG_CHAR_CREATE: 0x003a,
  SMSG_CHAR_ENUM: 0x003b,
  SMSG_CHAR_DELETE: 0x003c,
  CMSG_PLAYER_LOGIN: 0x003d,
  SMSG_NEW_WORLD: 0x003e,
  SMSG_TRANSFER_PENDING: 0x003f,
  SMSG_TRANSFER_ABORTED: 0x0040,
  SMSG_CHARACTER_LOGIN_FAILED: 0x0041,
  SMSG_LOGIN_SETTIMESPEED: 0x0042,
  SMSG_GAMETIME_UPDATE: 0x0043,
  CMSG_GAMETIME_SET: 0x0044,
  SMSG_GAMETIME_SET: 0x0045,
  CMSG_GAMESPEED_SET: 0x0046,
  SMSG_GAMESPEED_SET: 0x0047,
  CMSG_SERVERTIME: 0x0048,
  SMSG_SERVERTIME: 0x0049,
  CMSG_PLAYER_LOGOUT: 0x004a,
  CMSG_LOGOUT_REQUEST: 0x004b,
  SMSG_LOGOUT_RESPONSE: 0x004c,
  SMSG_LOGOUT_COMPLETE: 0x004d,
  CMSG_LOGOUT_CANCEL: 0x004e,
  SMSG_LOGOUT_CANCEL_ACK: 0x004f,
  CMSG_NAME_QUERY: 0x0050,
  SMSG_NAME_QUERY_RESPONSE: 0x0051,
  CMSG_PET_NAME_QUERY: 0x0052,
  SMSG_PET_NAME_QUERY_RESPONSE: 0x0053,
  CMSG_GUILD_QUERY: 0x0054,
  SMSG_GUILD_QUERY_RESPONSE: 0x0055,
  CMSG_ITEM_QUERY_SINGLE: 0x0056,
  CMSG_ITEM_QUERY_MULTIPLE: 0x0057,
  SMSG_ITEM_QUERY_SINGLE_RESPONSE: 0x0058,
  SMSG_ITEM_QUERY_MULTIPLE_RESPONSE: 0x0059,
  CMSG_PAGE_TEXT_QUERY: 0x005a,
  SMSG_PAGE_TEXT_QUERY_RESPONSE: 0x005b,
  CMSG_QUEST_QUERY: 0x005c,
  SMSG_QUEST_QUERY_RESPONSE: 0x005d,
  CMSG_GAMEOBJECT_QUERY: 0x005e,
  SMSG_GAMEOBJECT_QUERY_RESPONSE: 0x005f,
  CMSG_CREATURE_QUERY: 0x0060,
  SMSG_CREATURE_QUERY_RESPONSE: 0x0061,
  CMSG_WHO: 0x0062,
  SMSG_WHO: 0x0063,
  CMSG_WHOIS: 0x0064,
  SMSG_WHOIS: 0x0065,
  CMSG_FRIEND_LIST: 0x0066,
  SMSG_FRIEND_LIST: 0x0067,
  SMSG_FRIEND_STATUS: 0x0068,
  CMSG_ADD_FRIEND: 0x0069,
  CMSG_DEL_FRIEND: 0x006a,
  SMSG_IGNORE_LIST: 0x006b,
  CMSG_ADD_IGNORE: 0x006c,
  CMSG_DEL_IGNORE: 0x006d,
  CMSG_GROUP_INVITE: 0x006e,
  SMSG_GROUP_INVITE: 0x006f,
  CMSG_GROUP_CANCEL: 0x0070,
  SMSG_GROUP_CANCEL: 0x0071,
  CMSG_GROUP_ACCEPT: 0x0072,
  CMSG_GROUP_DECLINE: 0x0073,
  SMSG_GROUP_DECLINE: 0x0074,
  CMSG_GROUP_UNINVITE: 0x0075,
  CMSG_GROUP_UNINVITE_GUID: 0x0076,
  SMSG_GROUP_UNINVITE: 0x0077,
  CMSG_GROUP_SET_LEADER: 0x0078,
  SMSG_GROUP_SET_LEADER: 0x0079,
  CMSG_LOOT_METHOD: 0x007a,
  CMSG_GROUP_DISBAND: 0x007b,
  SMSG_GROUP_DESTROYED: 0x007c,
  SMSG_GROUP_LIST: 0x007d,
  SMSG_PARTY_MEMBER_STATS: 0x007e,
  SMSG_PARTY_COMMAND_RESULT: 0x007f,
  UMSG_UPDATE_GROUP_MEMBERS: 0x0080,
  CMSG_GUILD_CREATE: 0x0081,
  CMSG_GUILD_INVITE: 0x0082,
  SMSG_GUILD_INVITE: 0x0083,
  CMSG_GUILD_ACCEPT: 0x0084,
  CMSG_GUILD_DECLINE: 0x0085,
  SMSG_GUILD_DECLINE: 0x0086,
  CMSG_GUILD_INFO: 0x0087,
  SMSG_GUILD_INFO: 0x0088,
  CMSG_GUILD_ROSTER: 0x0089,
  SMSG_GUILD_ROSTER: 0x008a,
  CMSG_GUILD_PROMOTE: 0x008b,
  CMSG_GUILD_DEMOTE: 0x008c,
  CMSG_GUILD_LEAVE: 0x008d,
  CMSG_GUILD_REMOVE: 0x008e,
  CMSG_GUILD_DISBAND: 0x008f,
  CMSG_GUILD_LEADER: 0x0090,
  CMSG_GUILD_MOTD: 0x0091,
  SMSG_GUILD_EVENT: 0x0092,
  SMSG_GUILD_COMMAND_RESULT: 0x0093,
  UMSG_UPDATE_GUILD: 0x0094,
  CMSG_MESSAGECHAT: 0x0095,
  SMSG_MESSAGECHAT: 0x0096,
  CMSG_JOIN_CHANNEL: 0x0097,
  CMSG_LEAVE_CHANNEL: 0x0098,
  SMSG_CHANNEL_NOTIFY: 0x0099,
  CMSG_CHANNEL_LIST: 0x009a,
  SMSG_CHANNEL_LIST: 0x009b,
  CMSG_CHANNEL_PASSWORD: 0x009c,
  CMSG_CHANNEL_SET_OWNER: 0x009d,
  CMSG_CHANNEL_OWNER: 0x009e,
  CMSG_CHANNEL_MODERATOR: 0x009f,
  CMSG_CHANNEL_UNMODERATOR: 0x00a0,
  CMSG_CHANNEL_MUTE: 0x00a1,
  CMSG_CHANNEL_UNMUTE: 0x00a2,
  CMSG_CHANNEL_INVITE: 0x00a3,
  CMSG_CHANNEL_KICK: 0x00a4,
  CMSG_CHANNEL_BAN: 0x00a5,
  CMSG_CHANNEL_UNBAN: 0x00a6,
  CMSG_CHANNEL_ANNOUNCEMENTS: 0x00a7,
  CMSG_CHANNEL_MODERATE: 0x00a8,
  SMSG_UPDATE_OBJECT: 0x00a9,
  SMSG_DESTROY_OBJECT: 0x00aa,
  CMSG_USE_ITEM: 0x00ab,
  CMSG_OPEN_ITEM: 0x00ac,
  CMSG_READ_ITEM: 0x00ad,
  SMSG_READ_ITEM_OK: 0x00ae,
  SMSG_READ_ITEM_FAILED: 0x00af,
  SMSG_ITEM_COOLDOWN: 0x00b0,
  CMSG_GAMEOBJ_USE: 0x00b1,
  CMSG_GAMEOBJ_CHAIR_USE_OBSOLETE: 0x00b2,
  SMSG_GAMEOBJECT_CUSTOM_ANIM: 0x00b3,
  CMSG_AREATRIGGER: 0x00b4,
  MSG_MOVE_START_FORWARD: 0x00b5,
  MSG_MOVE_START_BACKWARD: 0x00b6,
  MSG_MOVE_STOP: 0x00b7,
  MSG_MOVE_START_STRAFE_LEFT: 0x00b8,
  MSG_MOVE_START_STRAFE_RIGHT: 0x00b9,
  MSG_MOVE_STOP_STRAFE: 0x00ba,
  MSG_MOVE_JUMP: 0x00bb,
  MSG_MOVE_START_TURN_LEFT: 0x00bc,
  MSG_MOVE_START_TURN_RIGHT: 0x00bd,
  MSG_MOVE_STOP_TURN: 0x00be,
  MSG_MOVE_START_PITCH_UP: 0x00bf,
  MSG_MOVE_START_PITCH_DOWN: 0x00c0,
  MSG_MOVE_STOP_PITCH: 0x00c1,
  MSG_MOVE_SET_RUN_MODE: 0x00c2,
  MSG_MOVE_SET_WALK_MODE: 0x00c3,
  MSG_MOVE_TOGGLE_LOGGING: 0x00c4,
  MSG_MOVE_TELEPORT: 0x00c5,
  MSG_MOVE_TELEPORT_CHEAT: 0x00c6,
  SMSG_MOVE_WORLDPORT_ACK: 0x00c7,
  MSG_MOVE_TOGGLE_FALL_LOGGING: 0x00c8,
  MSG_MOVE_COLLIDE_REDIRECT: 0x00c9,
  MSG_MOVE_COLLIDE_STUCK: 0x00ca,
  MSG_MOVE_START_SWIM: 0x00cb,
  MSG_MOVE_STOP_SWIM: 0x00cc,
  MSG_MOVE_SET_RUN_SPEED_CHEAT: 0x00cd,
  MSG_MOVE_SET_RUN_SPEED: 0x00ce,
  MSG_MOVE_SET_WALK_SPEED_CHEAT: 0x00cf,
  MSG_MOVE_SET_WALK_SPEED: 0x00d0,
  MSG_MOVE_SET_SWIM_SPEED_CHEAT: 0x00d1,
  MSG_MOVE_SET_SWIM_SPEED: 0x00d2,
  MSG_MOVE_SET_ALL_SPEED_CHEAT: 0x00d3,
  MSG_MOVE_SET_TURN_RATE_CHEAT: 0x00d4,
  MSG_MOVE_SET_TURN_RATE: 0x00d5,
  MSG_MOVE_TOGGLE_COLLISION_CHEAT: 0x00d6,
  MSG_MOVE_SET_FACING: 0x00d7,
  MSG_MOVE_SET_PITCH: 0x00d8,
  MSG_MOVE_WORLDPORT_ACK: 0x00d9,
  SMSG_MONSTER_MOVE: 0x00da,
  MSG_MOVE_RESERVED_0: 0x00db,
  MSG_MOVE_RESERVED_1: 0x00dc,
  MSG_MOVE_RESERVED_2: 0x00dd,
  MSG_MOVE_RESERVED_3: 0x00de,
  SMSG_FORCE_SPEED_CHANGE: 0x00df,
  CMSG_FORCE_SPEED_CHANGE_ACK: 0x00e0,
  SMSG_FORCE_SWIM_SPEED_CHANGE: 0x00e1,
  CMSG_FORCE_SWIM_SPEED_CHANGE_ACK: 0x00e2,
  SMSG_FORCE_MOVE_ROOT: 0x00e3,
  CMSG_FORCE_MOVE_ROOT_ACK: 0x00e4,
  SMSG_FORCE_MOVE_UNROOT: 0x00e5,
  CMSG_FORCE_MOVE_UNROOT_ACK: 0x00e6,
  MSG_MOVE_ROOT: 0x00e7,
  MSG_MOVE_UNROOT: 0x00e8,
  MSG_MOVE_HEARTBEAT: 0x00e9,
  CMSG_STUCK_OBSOLETE: 0x00ea,
  CMSG_TRIGGER_CINEMATIC_CHEAT: 0x00eb,
  CMSG_OPENING_CINEMATIC: 0x00ec,
  SMSG_TRIGGER_CINEMATIC: 0x00ed,
  CMSG_NEXT_CINEMATIC_CAMERA: 0x00ee,
  CMSG_COMPLETE_CINEMATIC: 0x00ef,
  SMSG_TUTORIAL_FLAGS: 0x00f0,
  CMSG_TUTORIAL_SHOWN: 0x00f1,
  CMSG_TUTORIAL_CLEAR: 0x00f2,
  CMSG_TUTORIAL_RESET: 0x00f3,
  CMSG_STANDSTATECHANGE: 0x00f4,
  CMSG_EMOTE: 0x00f5,
  SMSG_EMOTE: 0x00f6,
  CMSG_TEXT_EMOTE: 0x00f7,
  SMSG_TEXT_EMOTE: 0x00f8,
  CMSG_AUTOEQUIP_GROUND_ITEM: 0x00f9,
  CMSG_AUTOSTORE_GROUND_ITEM: 0x00fa,
  CMSG_AUTOSTORE_LOOT_ITEM: 0x00fb,
  CMSG_STORE_LOOT_IN_SLOT: 0x00fc,
  CMSG_AUTOEQUIP_ITEM: 0x00fd,
  CMSG_AUTOSTORE_BAG_ITEM: 0x00fe,
  CMSG_SWAP_ITEM: 0x00ff,
  CMSG_SWAP_INV_ITEM: 0x0100,
  CMSG_SPLIT_ITEM: 0x0101,
  CMSG_PICKUP_ITEM: 0x0102,
  CMSG_DROP_ITEM: 0x0103,
  CMSG_DESTROYITEM: 0x0104,
  SMSG_INVENTORY_CHANGE_FAILURE: 0x0105,
  SMSG_OPEN_CONTAINER: 0x0106,
  CMSG_INSPECT: 0x0107,
  SMSG_INSPECT: 0x0108,
  CMSG_INITIATE_TRADE: 0x0109,
  CMSG_BEGIN_TRADE: 0x010a,
  CMSG_BUSY_TRADE: 0x010b,
  CMSG_IGNORE_TRADE: 0x010c,
  CMSG_ACCEPT_TRADE: 0x010d,
  CMSG_UNACCEPT_TRADE: 0x010e,
  CMSG_CANCEL_TRADE: 0x010f,
  CMSG_SET_TRADE_ITEM: 0x0110,
  CMSG_CLEAR_TRADE_ITEM: 0x0111,
  CMSG_SET_TRADE_GOLD: 0x0112,
  SMSG_TRADE_STATUS: 0x0113,
  SMSG_TRADE_STATUS_EXTENDED: 0x0114,
  SMSG_INITIALIZE_FACTIONS: 0x0115,
  SMSG_SET_FACTION_VISIBLE: 0x0116,
  SMSG_SET_FACTION_STANDING: 0x0117,
  CMSG_SET_FACTION_ATWAR: 0x0118,
  CMSG_SET_FACTION_CHEAT: 0x0119,
  SMSG_SET_PROFICIENCY: 0x011a,
  CMSG_SET_ACTION_BUTTON: 0x011b,
  SMSG_ACTION_BUTTONS: 0x011c,
  SMSG_INITIAL_SPELLS: 0x011d,
  SMSG_LEARNED_SPELL: 0x011e,
  SMSG_SUPERCEDED_SPELL: 0x011f,
  CMSG_NEW_SPELL_SLOT: 0x0120,
  CMSG_CAST_SPELL: 0x0121,
  CMSG_CANCEL_CAST: 0x0122,
  SMSG_CAST_RESULT: 0x0123,
  SMSG_SPELL_START: 0x0124,
  SMSG_SPELL_GO: 0x0125,
  SMSG_SPELL_FAILURE: 0x0126,
  SMSG_SPELL_COOLDOWN: 0x0127,
  SMSG_COOLDOWN_EVENT: 0x0128,
  CMSG_CANCEL_AURA: 0x0129,
  SMSG_UPDATE_AURA_DURATION: 0x012a,
  SMSG_PET_CAST_FAILED: 0x012b,
  MSG_CHANNEL_START: 0x012c,
  MSG_CHANNEL_UPDATE: 0x012d,
  CMSG_CANCEL_CHANNELLING: 0x012e,
  SMSG_AI_REACTION: 0x012f,
  CMSG_SET_SELECTION: 0x0130,
  CMSG_SET_TARGET: 0x0131,
  CMSG_START_USING_RANGED_WEAPON: 0x0132,
  CMSG_STOP_USING_RANGED_WEAPON: 0x0133,
  CMSG_ATTACKSWING: 0x0134,
  CMSG_ATTACKSTOP: 0x0135,
  SMSG_ATTACKSTART: 0x0136,
  SMSG_ATTACKSTOP: 0x0137,
  SMSG_ATTACKSWING_NOTINRANGE: 0x0138,
  SMSG_ATTACKSWING_BADFACING: 0x0139,
  SMSG_ATTACKSWING_NOTSTANDING: 0x013a,
  SMSG_ATTACKSWING_DEADTARGET: 0x013b,
  SMSG_ATTACKSWING_CANT_ATTACK: 0x013c,
  SMSG_ATTACKERSTATEUPDATE: 0x013d,
  SMSG_VICTIMSTATEUPDATE_OBSOLETE: 0x013e,
  SMSG_DAMAGE_DONE: 0x013f,
  SMSG_DAMAGE_TAKEN: 0x0140,
  SMSG_CANCEL_COMBAT: 0x0141,
  SMSG_PLAYER_COMBAT_XP_GAIN_OBSOLETE: 0x0142,
  SMSG_HEALSPELL_ON_PLAYER: 0x0143,
  SMSG_HEALSPELL_ON_PLAYERS_PET: 0x0144,
  CMSG_SHEATHE: 0x0145,
  CMSG_SAVE_PLAYER: 0x0146,
  CMSG_SETDEATHBINDPOINT: 0x0147,
  SMSG_BINDPOINTUPDATE: 0x0148,
  CMSG_GETDEATHBINDZONE: 0x0149,
  SMSG_BINDZONEREPLY: 0x014a,
  SMSG_PLAYERBOUND: 0x014b,
  SMSG_DEATH_NOTIFY: 0x014c,
  CMSG_REPOP_REQUEST: 0x014d,
  SMSG_RESURRECT_REQUEST: 0x014e,
  CMSG_RESURRECT_RESPONSE: 0x014f,
  CMSG_LOOT: 0x0150,
  CMSG_LOOT_MONEY: 0x0151,
  CMSG_LOOT_RELEASE: 0x0152,
  SMSG_LOOT_RESPONSE: 0x0153,
  SMSG_LOOT_RELEASE_RESPONSE: 0x0154,
  SMSG_LOOT_REMOVED: 0x0155,
  SMSG_LOOT_MONEY_NOTIFY: 0x0156,
  SMSG_LOOT_ITEM_NOTIFY: 0x0157,
  SMSG_LOOT_CLEAR_MONEY: 0x0158,
  SMSG_ITEM_PUSH_RESULT: 0x0159,
  SMSG_DUEL_REQUESTED: 0x015a,
  SMSG_DUEL_OUTOFBOUNDS: 0x015b,
  SMSG_DUEL_INBOUNDS: 0x015c,
  SMSG_DUEL_COMPLETE: 0x015d,
  SMSG_DUEL_WINNER: 0x015e,
  CMSG_DUEL_ACCEPTED: 0x015f,
  CMSG_DUEL_CANCELLED: 0x0160,
  SMSG_MOUNTRESULT: 0x0161,
  SMSG_DISMOUNTRESULT: 0x0162,
  SMSG_PUREMOUNT_CANCELLED: 0x0163,
  CMSG_MOUNTSPECIAL_ANIM: 0x0164,
  SMSG_MOUNTSPECIAL_ANIM: 0x0165,
  SMSG_PET_TAME_FAILURE: 0x0166,
  CMSG_PET_SET_ACTION: 0x0167,
  CMSG_PET_ACTION: 0x0168,
  CMSG_PET_ABANDON: 0x0169,
  CMSG_PET_RENAME: 0x016a,
  SMSG_PET_NAME_INVALID: 0x016b,
  SMSG_PET_SPELLS: 0x016c,
  CMSG_PET_CAST_SPELL_OBSOLETE: 0x016d,
  CMSG_LIST_INVENTORY: 0x016e,
  SMSG_LIST_INVENTORY: 0x016f,
  CMSG_SELL_ITEM: 0x0170,
  SMSG_SELL_ITEM: 0x0171,
  CMSG_BUY_ITEM: 0x0172,
  CMSG_BUY_ITEM_IN_SLOT: 0x0173,
  SMSG_BUY_ITEM: 0x0174,
  SMSG_BUY_FAILED: 0x0175,
  CMSG_NPC_HELLO: 0x0176,
  SMSG_NPC_HYPERTEXT: 0x0177,
  CMSG_NPC_TEXT_QUERY: 0x0178,
  SMSG_NPC_TEXT_UPDATE: 0x0179,
  CMSG_NPC_OFFER_ITEM: 0x017a,
  SMSG_NPC_ACCEPT_ITEM: 0x017b,
  SMSG_NPC_DECLINE_ITEM: 0x017c,
  SMSG_NPC_WONT_TALK: 0x017d,
  CMSG_QUESTGIVER_STATUS_QUERY: 0x017e,
  SMSG_QUESTGIVER_STATUS: 0x017f,
  CMSG_QUESTGIVER_HELLO: 0x0180,
  SMSG_QUESTGIVER_QUEST_LIST: 0x0181,
  CMSG_QUESTGIVER_QUERY_QUEST: 0x0182,
  CMSG_QUESTGIVER_QUEST_AUTOLAUNCH: 0x0183,
  SMSG_QUESTGIVER_QUEST_DETAILS: 0x0184,
  CMSG_QUESTGIVER_ACCEPT_QUEST: 0x0185,
  CMSG_QUESTGIVER_COMPLETE_QUEST: 0x0186,
  SMSG_QUESTGIVER_REQUEST_ITEMS: 0x0187,
  CMSG_QUESTGIVER_REQUEST_REWARD: 0x0188,
  SMSG_QUESTGIVER_OFFER_REWARD: 0x0189,
  CMSG_QUESTGIVER_CHOOSE_REWARD: 0x018a,
  SMSG_QUESTGIVER_QUEST_INVALID: 0x018b,
  CMSG_QUESTGIVER_CANCEL: 0x018c,
  SMSG_QUESTGIVER_QUEST_COMPLETE: 0x018d,
  SMSG_QUESTGIVER_QUEST_FAILED: 0x018e,
  CMSG_QUESTLOG_SWAP_QUEST: 0x018f,
  CMSG_QUESTLOG_REMOVE_QUEST: 0x0190,
  SMSG_QUESTLOG_FULL: 0x0191,
  SMSG_QUESTUPDATE_FAILED: 0x0192,
  SMSG_QUESTUPDATE_COMPLETE: 0x0193,
  SMSG_QUESTUPDATE_ADD_KILL: 0x0194,
  SMSG_QUESTUPDATE_ADD_ITEM: 0x0195,
  CMSG_QUEST_CONFIRM_ACCEPT: 0x0196,
  SMSG_QUEST_CONFIRM_ACCEPT: 0x0197,
  CMSG_TAXICLEARALLNODES: 0x0198,
  CMSG_TAXIENABLEALLNODES: 0x0199,
  CMSG_TAXISHOWNODES: 0x019a,
  SMSG_SHOWTAXINODES: 0x019b,
  CMSG_TAXINODE_STATUS_QUERY: 0x019c,
  SMSG_TAXINODE_STATUS: 0x019d,
  CMSG_TAXIQUERYAVAILABLENODES: 0x019e,
  CMSG_ACTIVATETAXI: 0x019f,
  SMSG_ACTIVATETAXIREPLY: 0x01a0,
  SMSG_NEW_TAXI_PATH: 0x01a1,
  CMSG_TRAINER_LIST: 0x01a2,
  SMSG_TRAINER_LIST: 0x01a3,
  CMSG_TRAINER_BUY_SPELL: 0x01a4,
  SMSG_TRAINER_BUY_SUCCEEDED: 0x01a5,
  SMSG_TRAINER_BUY_FAILED: 0x01a6,
  CMSG_BINDER_ACTIVATE: 0x01a7,
  SMSG_PLAYERBINDERROR: 0x01a8,
  CMSG_BANKER_ACTIVATE: 0x01a9,
  SMSG_SHOW_BANK: 0x01aa,
  CMSG_BUY_BANK_SLOT: 0x01ab,
  SMSG_BUY_BANK_SLOT_RESULT: 0x01ac,
  CMSG_PETITION_SHOWLIST: 0x01ad,
  SMSG_PETITION_SHOWLIST: 0x01ae,
  CMSG_PETITION_BUY: 0x01af,
  CMSG_PETITION_SHOW_SIGNATURES: 0x01b0,
  SMSG_PETITION_SHOW_SIGNATURES: 0x01b1,
  CMSG_PETITION_SIGN: 0x01b2,
  SMSG_PETITION_SIGN_RESULTS: 0x01b3,
  CMSG_OFFER_PETITION: 0x01b4,
  CMSG_TURN_IN_PETITION: 0x01b5,
  SMSG_TURN_IN_PETITION_RESULTS: 0x01b6,
  CMSG_PETITION_QUERY: 0x01b7,
  SMSG_PETITION_QUERY_RESPONSE: 0x01b8,
  SMSG_FISH_NOT_HOOKED: 0x01b9,
  SMSG_FISH_ESCAPED: 0x01ba,
  CMSG_BUG: 0x01bb,
  SMSG_NOTIFICATION: 0x01bc,
  CMSG_PLAYED_TIME: 0x01bd,
  SMSG_PLAYED_TIME: 0x01be,
  CMSG_QUERY_TIME: 0x01bf,
  SMSG_QUERY_TIME_RESPONSE: 0x01c0,
  SMSG_LOG_XPGAIN: 0x01c1,
  MSG_SPLIT_MONEY: 0x01c2,
  CMSG_RECLAIM_CORPSE: 0x01c3,
  CMSG_WRAP_ITEM: 0x01c4,
  SMSG_LEVELUP_INFO: 0x01c5,
  MSG_MINIMAP_PING: 0x01c6,
  SMSG_RESISTLOG: 0x01c7,
  SMSG_ENCHANTMENTLOG: 0x01c8,
  CMSG_SET_SKILL_CHEAT: 0x01c9,
  SMSG_START_MIRROR_TIMER: 0x01ca,
  SMSG_PAUSE_MIRROR_TIMER: 0x01cb,
  SMSG_STOP_MIRROR_TIMER: 0x01cc,
  CMSG_PING: 0x01cd,
  SMSG_PONG: 0x01ce,
  SMSG_CLEAR_COOLDOWN: 0x01cf,
  SMSG_GAMEOBJECT_PAGETEXT: 0x01d0,
  CMSG_SETWEAPONMODE: 0x01d1,
  SMSG_COOLDOWN_CHEAT: 0x01d2,
  SMSG_SPELL_DELAYED: 0x01d3,
  CMSG_PLAYER_MACRO: 0x01d4,
  SMSG_PLAYER_MACRO: 0x01d5,
  CMSG_GHOST: 0x01d6,
  CMSG_GM_INVIS: 0x01d7,
  CMSG_SCREENSHOT: 0x01d8,
  MSG_GM_BIND_OTHER: 0x01d9,
  MSG_GM_SUMMON: 0x01da,
  SMSG_ITEM_TIME_UPDATE: 0x01db,
  SMSG_ITEM_ENCHANT_TIME_UPDATE: 0x01dc,
  SMSG_AUTH_CHALLENGE: 0x01dd,
  CMSG_AUTH_SESSION: 0x01de,
  SMSG_AUTH_RESPONSE: 0x01df,
  MSG_GM_SHOWLABEL: 0x01e0,
  MSG_ADD_DYNAMIC_TARGET: 0x01e1,
  MSG_SAVE_GUILD_EMBLEM: 0x01e2,
  MSG_TABARDVENDOR_ACTIVATE: 0x01e3,
  SMSG_PLAY_SPELL_VISUAL: 0x01e4,
  CMSG_ZONEUPDATE: 0x01e5,
  SMSG_PARTYKILLLOG: 0x01e6,
  SMSG_COMPRESSED_UPDATE_OBJECT: 0x01e7,
  SMSG_MIRRORTIMERDAMAGELOG: 0x01e8,
  SMSG_EXPLORATION_EXPERIENCE: 0x01e9,
  CMSG_GM_SET_SECURITY_GROUP: 0x01ea,
  CMSG_GM_NUKE: 0x01eb,
  MSG_RANDOM_ROLL: 0x01ec,
  SMSG_ENVIRONMENTALDAMAGELOG: 0x01ed,
  CMSG_RWHOIS: 0x01ee,
  SMSG_RWHOIS: 0x01ef,
  MSG_LOOKING_FOR_GROUP: 0x01f0,
  CMSG_SET_LOOKING_FOR_GROUP: 0x01f1
}

const entries = Object.entries(OpCodes)

function getByUpCode(opcode) {
  const kv = entries.find(e => {
    return e[1] === opcode
  })

  return kv[0]
}

module.exports = {
  ...OpCodes,
  getByUpCode
}
