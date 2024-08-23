import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthProviderType } from 'src/common/enum';

@Schema()
export class SocialAccounts {
  @Prop({ required: true, enum: AuthProviderType })
  authProvider: AuthProviderType;

  @Prop({ required: true })
  authProviderId: string;
}

export const SocialAccountsSchema =
  SchemaFactory.createForClass(SocialAccounts);
