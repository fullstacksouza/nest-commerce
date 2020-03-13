import { Injectable } from '@nestjs/common';
import { User } from 'src/types/user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDTO } from 'src/auth/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {
  }

  sanitizeUser(user: User) {
    return user.depopulate('password')
  }

  create(userDTO: RegisterDTO) { }

  findByLogin(userDTO: any) {

  }
}
