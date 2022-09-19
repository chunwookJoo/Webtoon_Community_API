import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './user.repository';
import * as config from 'config';
import { User, UserSchema } from './schema/user.schema';

// const jwtConfig = config.get('jwt');

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      // secret: process.env.JWT_SECRET || jwtConfig.secret,
      secret: process.env.JWT_SECRET,
      signOptions: {
        // expiresIn: jwtConfig.expiresIn,
        expiresIn: process.env.JWT_EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtStrategy],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
