import Realm from 'realm';

// Declare Chat Schema
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
    subject: 'string',
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
    subject: 'string',
    typeID: 'int',
    filePath: 'string',
    attachmentID: 'string',
    saveToLocal: 'bool',
    delivered: 'bool',
  },
};

// User schema
class UserSchema extends Realm.Object {}
UserSchema.schema = {
  name: 'Users',
  properties: {
    name: 'string',
    phone: 'string',
    email: 'string',
    displayProfile: 'string',
    existence: 'bool',
    userID: 'string',
  },
};

// Create realm
let realm = new Realm({
  schema: [ChatSchema, MessageSchema, UserSchema],
  schemaVersion: 7,
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
  _subject,
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
      subject: _subject,
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
  _subject,
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
        subject: _subject,
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

// Update all books that have a null value as edition and update it to 1
let saveBackgroundChat = (
  _body,
  _displayName,
  _picturePath,
  _recipientId,
  _sendingUserID,
  _subject,
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
        subject: _subject,
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

// Update all books that have a null value as edition and update it to 1
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
  _subject,
  _typeId,
  _filePath,
  _attachmentID,
  _saveToLocal,
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
      subject: _subject,
      typeID: _typeId,
      filePath: _filePath,
      attachmentID: _attachmentID,
      saveToLocal: _saveToLocal,
      delivered: false,
    });
  });

  return _id;
};

// Update message delivery status
let updateMessageDeliveryStatus = _id => {
  realm.write(() => {
    let message = realm.objects('Message').filtered(`id = ${_id}`);
    message.map((item, index) => {
      item.delivered = true;
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
      name: contact.name,
      phone: contact.name,
      email: contact.email,
      displayProfile: contact.displayProfile,
      existence: contact.existence,
      userID: contact.userID,
    });
  });
};

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

let updateAllUser = data => {
  if (data.userID != '') {
    const user = getUser(data.phone);
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
  return realm.objects('Users').sorted('name');
};

// Get all users
let getNonChatmailUser = () => {
  return realm.objects('Users').filtered(`userID == ''`);
};

// Get all users
let getChatmailUser = () => {
  return realm.objects('Users').filtered(`userID != ''`);
};

// Get all users
let getUser = _phone => {
  return realm.objects('Users').filtered(`phone == "${_phone}"`);
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
  getChatmailUser,
  getNonChatmailUser,
  addUser,
  addAllUser,
  updateAllUser,
  updateMessageDeliveryStatus,
  updateFileDownloadStatus,
};
