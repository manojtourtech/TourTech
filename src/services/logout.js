import client from './client';
import Config from '../config';

export default function logout(sessionId) {
  return client.get(
    Config.BASE_URL + Config.LOGOUT + `?sessionId=${sessionId}`,
  );
}
