import { registerEnumType } from '@nestjs/graphql';

export enum PostType {
  post = 'post',
  event = 'event',
}

registerEnumType(PostType, {
  name: 'PostType',
});
