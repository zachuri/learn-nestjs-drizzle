import { DRIZZLE_ORM } from '@app/core/constants/db.constants';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../drizzle/schema';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @Inject(DRIZZLE_ORM) private db: PostgresJsDatabase<typeof schema>,
  ) {}

  async findAll(name?: string): Promise<City[]> {
    return this.db
      .select()
      .from(schema.cities)
      .where(name && eq(schema.cities.name, name));
  }

  findById(cityId: number): Promise<City> {
    const city = this.db.query.cities.findFirst({
      where: eq(schema.cities.id, cityId),
    });

    return city;
  }

  async createCity(createUserDto: CreateCityDto): Promise<City[]> {
    const newCity = {
      ...createUserDto,
    };

    return await this.db.insert(schema.cities).values(newCity).returning();
  }
}
