const responseMessages = {
  EN: {
    PASSWORD_ALREADY_SET: 'Password already added',
    PASSWORD_SET_SUCCESSFULLY: 'Password added successfully.',
    UNAUTHORIZED_USER: 'Unauthorized.',
    EMAIL_ALREADY_EXISTS: 'Email not available.',
    EMAIL_DOES_NOT_EXIST: 'Email does not exists.',
    VERIFICATION_CODE_SENT_TO_EMAIL:
      'Verification code sent to your email please use that code to verify your email',
    VERIFICATION_CODE_SENT_TO_PHONE:
      'Verification code sent to your phone number please use that code to verify your phone number.',
    VERIFICATION_CODE_VALID_SET_PASSWORD:
      'Code verified successfully. Please reset your password.',
    PHONE_UPDATED: 'Phone number updated',
    LOGIN_SUCCESS: 'Login success',
    FAILED_TO_AUTHORIZE_FACEBOOK: 'Failed to authorize facebook account.',
    FAILED_TO_AUTHORIZE_APPLE: 'Failed to authorize apple account.',
    FAILED_TO_AUTHORIZE_GOOGLE: 'Failed to authorize google account.',
    VERIFICATION_CODE_ALREADY_SENT: 'Verification code already sent',
    TOO_MANY_ATTEMPTS: 'Too many attempts. Please try again.',
    INVALID_VERIFICATION_CODE: 'Invalid verification code',
    INVALID_CREDENTIALS: 'Invalid login credentials.',
    PASSWOD_CHANGE_PASSWORD_NOT_MATCHED:
      'Password you have provided does not match with your existing password.',
    PASSWORD_RESET_CODE_SENT: 'Password reset code sent.',
    PASSWORD_CHANGED_SUCCESSFULLY: 'Password changed succesfully',
    PROFILE_UPDATED_SUCCESSFULLY: 'Profile updated successfully.',
    LOGGED_OUT_SUCCESSFULLY: 'Logged out successfully.',
    TOKEN_REFRESH_SUCCESS: 'Token refreshed successfully.',
    CANNOT_UPDATE_SAME_EMAIL: 'Can not update the same email address',
    EMAIL_UPDATED: 'Email verified and updated successfully',
    PROFILE: {
      INVALID_EXTENSION: 'Invalid profile image extension.',
    },
    FAILED_TO_AUTHORIZE_TIKTOK: 'Failed to authorize tiktok account.',
    BIOMETRIC_ENABLE_SUCCESS: 'Biometric enabled successfully',
    BIOMETRIC_ALREADY_ENABLE: 'Biometric already set as enabled.',

    COIN_ADDED_SUCCESSFULLY: 'Coin added successfully',
    COIN_LISTED_SUCCESSFULLY: 'Coin listed successfully',
    COIN_PACK_NOT_FOUND: 'Coin package not found',
    RECEIPT_ALREADY_VERIFIED: 'Receipt already verified',
    DISPOSABLE_EMAIL_NOT_ALLOWED: 'Email with this domain is not allowed',

    FAQ_LISTING: 'FAQs listed successfully',
  },
};
const lang = process.env.SYSTEM_LANGUAGE || 'EN';

let Messages;

if (lang == 'EN') {
  Messages = responseMessages.EN;
}

export default Messages;
