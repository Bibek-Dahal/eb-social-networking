import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { PostType } from 'src/common/enum/post-type.enum';
export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, enum: [PostType.event, PostType.post] })
  type: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop({ trim: true })
  description: string;

  @Prop()
  image: string;

  @Prop({ default: 0 })
  likeCount: number;

  @Prop({ default: 0 })
  commentCount: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
