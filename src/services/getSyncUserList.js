import client from './client';
import Config from '../config';

export default function getSyncUserList(sessionId, contactList) {
  const data = client.post(Config.BASE_URL + Config.CHECK_EXISTENCE, {
    sessionId: sessionId,
    contactList: contactList,
  });
  return data;
}
