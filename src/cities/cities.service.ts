import { DRIZZLE_ORM } from '@app/core/constants/db.constants';
import { Inject, Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../modules/drizzle/schema';

@Injectable()
export class CitiesService {
  private cities = [{ id: 0, name: 'Los Angeles' }];

  constructor(
    @Inject(DRIZZLE_ORM) private db: PostgresJsDatabase<typeof schema>,
  ) {}

  findAll() {
    return this.cities;
  }

  findById(cityId: number) {
    return this.cities.find((city) => city.id === cityId);
  }

  createCity({ name }: { name: string }) {
    const newCity = {
      id: Math.random(),
      name,
    };

    this.db.insert(schema.cities).values(newCity);
  }
}
