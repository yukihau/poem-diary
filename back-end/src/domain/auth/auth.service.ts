import { BadRequestException, Injectable } from '@nestjs/common';
import User from './schema/User';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(
    fullName?: string,
    email?: string,
    username?: string,
    password?: string,
  ) {
    const user = await User.findOne({ username });
    if (user) throw new BadRequestException('User already exists!');

    if (fullName && email && username && password) {
      if (!(password.length > 6)) {
        throw new BadRequestException(
          'Password needs to be longer than 6 characters',
        );
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        fullName,
        email,
        username,
        password: hashedPassword,
      });

      await newUser.save();
    }
    throw new BadRequestException('Please fill all the fields!');
  }

  async login(username: string, password: string) {
    const user = await User.findOne({ username });

    if (!user || !user.password) {
      throw new BadRequestException('User does not exist!');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      throw new BadRequestException('Password does not match!');
    }

    const payload = {
      id: user._id.toString(),
      fullName: user.fullName,
      email: user.email,
      username: user.username,
    };

    return this.jwtService.sign(payload);
  }
}
