import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/users.models';
import { faker } from '@faker-js/faker';
import { UserDto } from 'src/dto/users.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  Add(body: UserDto) {
    return this.userModel.create(body);
  }

  FindAll() {
    return this.userModel.find();
  }

  FindOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  Update(id: string, body: UserDto) {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }

  Search(key: string) {
    const keyword = key
      ? {
          $or: [
            { fullname: { $regex: key, $options: 'i' } },
            { email: { $regex: key, $options: 'i' } },
          ],
        }
      : {};
    return this.userModel.find(keyword);
  }

  Faker() {
    for (let index = 0; index < 10; index++) {
      const fakeUser = {
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 60 }),  // Random age between 18 and 60
        country: faker.location.country(),    // Replace deprecated address with country
    };
      this.userModel.create(fakeUser);
    }
    return 'success';
  }
}