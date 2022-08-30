import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
// import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
// import { User } from './user.entity';
import { User, UserDocument } from './schema/user.schema';
// import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//   async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
//     const { username, password } = authCredentialDto;

//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = this.create({ username, password: hashedPassword });

//     try {
//       await this.save(user);
//     } catch (error) {
//       console.log('error', error);
//       if (error.code === 'ER_DUP_ENTRY') {
//         throw new ConflictException('닉네임이 이미 존재합니다.');
//       } else {
//         throw new InternalServerErrorException();
//       }
//     }
//   }
// }

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * 카카오 유저 회원가입
   */
  async createKakaoUser(user: User): Promise<any> {
    const newUser = new this.userModel(user);

    try {
      newUser.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * 네이버 유저 회원가입
   */
  async createNaverUser(user: User): Promise<void> {
    const newUser = new this.userModel(user);

    try {
      newUser.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilterQuery);
  }

  async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(usersFilterQuery);
  }
}
