import { CitiesTable } from '@app/modules/drizzle/schema';

export class City implements CitiesTable {
  id: number;
  name: string;
}
