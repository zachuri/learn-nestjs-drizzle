import 'dotenv/config';
import type { Config } from 'drizzle-kit';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing');
}

const connectionString = process.env.DATABASE_URL;

export default {
  schema: 'src/drizzle/schema.ts',
  out: 'src/drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: connectionString
  }
} satisfies Config;

const client = postgres(connectionString);
export const db = drizzle(client, { schema });
