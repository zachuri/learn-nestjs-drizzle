import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { DB, DbType } from '@/global/provider/db.provider'
import { users } from '@/drizzle/schema'
import { eq } from 'drizzle-orm'

@Injectable()
export class UserService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  findAll() {
    return `This action returns all user`
  }

  async findOne(id: number) {
    const result = await this.db.select().from(users).where(eq(users.id, id));

    return result.length === 0 ? null : result[0];
    // return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
