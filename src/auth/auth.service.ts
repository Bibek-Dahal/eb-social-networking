import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';

@Injectable()
export class AuthService {
  create(createAuthInput: CreateUserInput) {
    return 'This action adds a new auth';
  }
}
