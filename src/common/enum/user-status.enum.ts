import { registerEnumType } from '@nestjs/graphql';

export enum UserStatus {
  email_verification_pending = 'email_verification_pending',
  email_verified = 'email_verified',
}

registerEnumType(UserStatus, {
  name: 'UserStatus',
});
