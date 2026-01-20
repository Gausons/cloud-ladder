import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, createAccountDto: CreateAccountDto) {
    return this.prisma.platformAccount.create({
      data: {
        ...createAccountDto,
        userId,
      },
    });
  }

  findAll(userId: number) {
    return this.prisma.platformAccount.findMany({
      where: { userId },
    });
  }

  findOne(id: number, userId: number) {
    return this.prisma.platformAccount.findFirst({
      where: { id, userId },
    });
  }

  update(id: number, updateAccountDto: UpdateAccountDto, userId: number) {
    return this.prisma.platformAccount.updateMany({
      where: { id, userId },
      data: updateAccountDto,
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.platformAccount.deleteMany({
      where: { id, userId },
    });
  }
}
