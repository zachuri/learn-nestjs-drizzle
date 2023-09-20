import { Module } from '@nestjs/common';
import { DB, DatabseProvider } from './database.provider';

@Module({
  providers: [DatabseProvider],
  exports: [DB],
})
export class DatabaseModule {}
