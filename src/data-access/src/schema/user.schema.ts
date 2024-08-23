import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRole, UserStatus } from 'src/common/enum';
import { SocialAccounts, SocialAccountsSchema } from './social-account.schema';

class EmailDetails {
  email: string;
  isVerified: boolean;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ type: [SocialAccountsSchema], default: [] })
  socialAccount: SocialAccounts[];

  @Prop({ required: true })
  emailDetail: EmailDetails;

  @Prop()
  password: string;

  @Prop({ required: true })
  userName: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  profileImage: string;

  @Prop({
    type: String,
    default: UserStatus.email_verification_pending,
  })
  status: UserStatus;

  @Prop()
  bio: string;

  @Prop({ default: null })
  lastLoggedInAt: Date;

  @Prop({ default: null })
  deletedAt: Date;

  @Prop()
  isBiometricEnabled?: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
