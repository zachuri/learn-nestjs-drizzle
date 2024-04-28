import { DRIZZLE_ORM } from '@app/core/constants/db.constants';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../modules/drizzle/schema';
import { CreateUserDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @Inject(DRIZZLE_ORM) private db: PostgresJsDatabase<typeof schema>,
  ) {}

  async findAll(): Promise<City[]> {
    return this.db.select().from(schema.cities);
  }

  async findById(cityId: number): Promise<City> {
    return this.db.query.cities.findFirst({
      where: eq(schema.cities.id, cityId),
    });
  }

  async createCity(createUserDto: CreateUserDto): Promise<City[]> {
    const newCity = {
      ...createUserDto,
    };

    return this.db.insert(schema.cities).values(newCity).returning();
  }
}
