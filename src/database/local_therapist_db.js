import Realm from 'realm';

// Recent Chat Schema to save last send or received message
class ChatSchema extends Realm.Object {}
ChatSchema.schema = {
  name: 'Chat',
  properties: {
    body: 'string',
    displayName: 'string',
    picturePath: 'string',
    recipientId: 'int',
    sendingUserID: 'int',
    sentTime: 'string',
    typeID: 'int',
    unreadMessage: 'int',
  },
};

// Declare Message Schema
class MessageSchema extends Realm.Object {}
MessageSchema.schema = {
  name: 'Message',
  primaryKey: 'id',
  properties: {
    id: 'int',
    body: 'string',
    displayName: 'string',
    picturePath: 'string',
    recipientId: 'int',
    sendingUserID: 'int',
    sentTime: 'string',
    typeID: 'int',
    filePath: 'string',
    attachmentID: 'string',
    saveToLocal: 'bool',
    deliveredStatus: 'int',
  },
};

// Declare User schema to save contacts
class UserSchema extends Realm.Object {}
UserSchema.schema = {
  name: 'Users',
  properties: {
    displayName: 'string',
    phone: 'string',
    email: 'string',
    picturePath: 'string',
    existence: 'bool',
    userID: 'int',
    phonePrefix: 'string',
    userOnlineStatus: 'bool',
  },
};

// Create realm db
let realm = new Realm({
  schema: [ChatSchema, MessageSchema, UserSchema],
  schemaVersion: 11,
  name: 'therapist.realm',
});

// Functions
// Return all Chat
let getAllChat = () => {
  return realm.objects('Chat').sorted('sentTime');
};

// Return all Message
let getAllMessage = () => {
  return realm.objects('Message');
};

// Return all Message
let getUnreadMessageCount = () => {
  let unreadMessageCount = 0;
  const recentChat = realm.objects('Chat');
  recentChat.forEach(obj => {
    unreadMessageCount = unreadMessageCount + obj.unreadMessage;
  });
  return unreadMessageCount;
};

// Add latest chat using parameters
let addChat = (
  _body,
  _displayName,
  _picturePath,
  _recipientId,
  _sendingUserID,
  _sentTime,
  _typeId,
) => {
  realm.write(() => {
    const chat = realm.create('Chat', {
      body: _body,
      displayName: _displayName,
      picturePath: _picturePath,
      recipientId: _recipientId,
      sendingUserID: _sendingUserID,
      sentTime: _sentTime,
      typeID: _typeId,
      unreadMessage: 0,
    });
  });
};

// Update chat with last message
let updateLastChat = (
  _body,
  _displayName,
  _picturePath,
  _recipientId,
  _sendingUserID,
  _typeId,
) => {
  realm.write(() => {
    const _sentTime = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    let chat = getChatById(_recipientId);
    if (chat.length == 0) {
      realm.create('Chat', {
        body: _body,
        displayName: _displayName,
        picturePath: _picturePath,
        recipientId: _recipientId,
        sendingUserID: _sendingUserID,
        sentTime: _sentTime,
        typeID: _typeId,
        unreadMessage: 0,
      });
    } else {
      chat.map((item, index) => {
        item.body = _body;
        item.typeID = _typeId;
        item.picturePath = _picturePath;
        item.sentTime = _sentTime;
      });
    }
  });
};

// Save background notification
let saveBackgroundChat = (
  _body,
  _displayName,
  _picturePath,
  _recipientId,
  _sendingUserID,
  _typeId,
) => {
  realm.write(() => {
    const _sentTime = new Date().toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    let chat = getChatById(_recipientId);
    if (chat.length == 0) {
      realm.create('Chat', {
        body: _body,
        displayName: _displayName,
        picturePath: _picturePath,
        recipientId: _recipientId,
        sendingUserID: _sendingUserID,
        sentTime: _sentTime,
        typeID: _typeId,
        unreadMessage: 1,
      });
    } else {
      chat.map((item, index) => {
        item.body = _body;
        item.typeID = _typeId;
        item.unreadMessage = item.unreadMessage + 1;
        item.sentTime = _sentTime;
      });
    }
  });
};

let getChatById = _recipientId => {
  return realm.objects('Chat').filtered(`recipientId = ${_recipientId}`);
};

// Get non read message count
let setUnReadMessageCount = _recipientId => {
  realm.write(() => {
    let chat = getChatById(_recipientId);
    chat.map((item, index) => {
      item.unreadMessage = 0;
    });
  });
};

// Add a message using parameters
let addMessage = (
  _body,
  _displayName,
  _picturePath,
  _recipientId,
  _sendingUserID,
  _typeId,
  _filePath,
  _attachmentID,
  _saveToLocal,
  _deliveredStatus,
) => {
  console.log('Write data to dc');
  const _sentTime = new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  let _id = 0;
  if (getAllMessage().length > 0) _id = realm.objects('Message').max('id') + 1;

  realm.write(() => {
    const message = realm.create('Message', {
      id: _id,
      body: _body,
      displayName: _displayName,
      picturePath: _picturePath,
      recipientId: _recipientId,
      sendingUserID: _sendingUserID,
      sentTime: _sentTime,
      typeID: _typeId,
      filePath: _filePath,
      attachmentID: _attachmentID,
      saveToLocal: _saveToLocal,
      deliveredStatus: _deliveredStatus,
    });
  });

  return _id;
};

// Update message delivery status
let updateMessageDeliveryStatus = (_id, _deliveredStatus) => {
  realm.write(() => {
    let message = realm
      .objects('Message')
      .filtered(`id = ${_id} && deliveredStatus = 2`);
    message.map((item, index) => {
      item.deliveredStatus = _deliveredStatus;
    });
  });
};

// Update message delivery status to message seen
let updateMessageSeenStatus = _id => {
  realm.write(() => {
    let message = realm.objects('Message').filtered(`recipientId = ${_id}`);
    message.map((item, index) => {
      item.deliveredStatus = 4;
    });
  });
};

// Update file download status
let updateFileDownloadStatus = (_id, _filePath) => {
  realm.write(() => {
    let message = realm.objects('Message').filtered(`id = ${_id}`);
    message.map((item, index) => {
      item.saveToLocal = true;
      item.filePath = _filePath;
    });
  });
};

// to get message by id
let getMessageById = _recipientId => {
  return realm
    .objects('Message')
    .filtered(
      `recipientId = ${_recipientId} || sendingUserID = ${_recipientId}`,
    );
};

// Remove all chats from Realm database
let deleteAllChats = () => {
  realm.write(() => {
    realm.delete(getAllChat());
  });
};

// Add a single user using parameters
let addUser = contact => {
  realm.write(() => {
    const user = realm.create('Users', {
      displayName: contact.displayName,
      phone: contact.phone,
      email: contact.email,
      picturePath: contact.picturePath,
      existence: contact.existence,
      userID: contact.userID,
      userOnlineStatus: false,
    });
  });
};

// Save all contact of phone in database
let addAllUser = contactList => {
  if (getAllUsers().length != contactList.length) {
    // realm.write(() => {
    //   realm.delete(getAllUsers());
    // });

    realm.write(() => {
      contactList.forEach(obj => {
        if (getUser(obj.phone).length == 0) {
          realm.create('Users', obj);
        }
      });
    });
  }
};

// Update all coctact i.e. user with user id
let updateAllUser = data => {
  if (data.userID != '') {
    if (data.phonePrefix === '972') {
      data.phoneNumber = '0' + data.phoneNumber;
    }
    const user = getUser(data.phoneNumber);
    console.log('Update user =', user);
    realm.write(() => {
      user.map((item, index) => {
        item.existence = data.existence;
        item.userID = data.userID;
      });
    });
  }
};

// Get all users
let getAllUsers = () => {
  return realm.objects('Users').sorted('displayName');
};

// Get all users count
let getAllUsersCount = () => {
  return realm.objects('Users').sorted('displayName').length;
};

// Get user by phone number
let getUser = _phone => {
  return realm.objects('Users').filtered(`phone == "${_phone}"`);
};

// Get user by ID
let getUserByID = _id => {
  return realm.objects('Users').filtered(`userID == "${_id}"`);
};

// Update user status online/offline
let updateUserStatus = (_id, _status) => {
  realm.write(() => {
    let user = realm.objects('Users').filtered(`userID == "${_id}"`);
    user.map((item, index) => {
      item.userOnlineStatus = _status;
    });
  });
};

// Exports
// Export the realm so other files can access it
export default realm;

// Export other functions so other files can access it
export {
  addMessage,
  addChat,
  getMessageById,
  getChatById,
  getAllMessage,
  getAllChat,
  getUnreadMessageCount,
  updateLastChat,
  saveBackgroundChat,
  setUnReadMessageCount,
  deleteAllChats,
  getUser,
  getAllUsers,
  addUser,
  addAllUser,
  updateAllUser,
  updateMessageDeliveryStatus,
  updateFileDownloadStatus,
  updateMessageSeenStatus,
  getUserByID,
  updateUserStatus,
  getAllUsersCount,
};
