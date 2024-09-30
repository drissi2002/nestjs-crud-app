import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/users.models';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: User.name , schema :UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
