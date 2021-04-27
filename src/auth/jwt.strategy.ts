import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import {Strategy, ExtractJwt} from 'passport-jwt';
import { JwtPayloadInterface } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from "./user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload: JwtPayloadInterface): Promise<User> {
    const {email} = payload;
    const user = await this.userRepository.findOne({email});
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}