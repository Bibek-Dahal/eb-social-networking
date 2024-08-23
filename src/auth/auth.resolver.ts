import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';

import { CreateUserInput } from './dto/input/create-user.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }

  @Mutation(() => String)
  createAuth(@Args('createAuthInput') createAuthInput: CreateUserInput) {
    return this.authService.create(createAuthInput);
  }
}
