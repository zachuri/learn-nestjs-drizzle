import * as schema from '@app/modules/drizzle/schema';
import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { DRIZZLE_ORM } from './core/constants/db.constants';

@Injectable()
export class AppService {
  constructor(
    @Inject(DRIZZLE_ORM) private db: PostgresJsDatabase<typeof schema>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUser() {
    console.log(this.db);
    // return 'test'
    return this.db.select().from(schema.users);
  }
}
