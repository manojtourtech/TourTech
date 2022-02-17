import client from './client';
import Config from '../config';

export default function verifyOtp(otp, sessionId) {
  return client.post(Config.BASE_URL + Config.VERIFY_OTP, {
    otpNum: '' + otp,
    sessionId: sessionId,
  });
}
