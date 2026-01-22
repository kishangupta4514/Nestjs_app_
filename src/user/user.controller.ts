import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import type { User } from '@prisma/client';
import type { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser('') user: User) {
    return user;
  }
}
