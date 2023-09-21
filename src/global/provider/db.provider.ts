import { FactoryProvider, Logger } from '@nestjs/common';
import { DefaultLogger, LogWriter } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js'; // Import the PostgreSQL drizzle module
import { ConfigService } from '@nestjs/config';
import postgres from 'postgres';

export const DB = Symbol('DB_SERVICE');
export type DbType = ReturnType<typeof drizzle>; // Update the DbType type

export const DatabseProvider: FactoryProvider = {
  provide: DB,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const logger = new Logger('DB');

    logger.debug('Connecting to PostgreSQL...');

    const connectionString = configService.get<string>('DATABASE_URL'); // Replace with your PostgreSQL connection string
    const client = postgres(connectionString);

    logger.debug('Connected to PostgreSQL!');

    class CustomDbLogWriter implements LogWriter {
      write(message: string) {
        logger.verbose(message);
      }
    }

    return drizzle(client, {
      logger: new DefaultLogger({ writer: new CustomDbLogWriter() })
    });
  }
};
