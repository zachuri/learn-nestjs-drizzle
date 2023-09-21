import {migrate} from 'drizzle-orm/node-postgres/migrator';
import db from '@/database/database.config';

// this will automatically run needed migrations on the database
migrate(db, {migrationsFolder: './src/database/migrations'})
  .then(() => {
    console.log('Migrations complete!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Migrations failed!', err);
    process.exit(1);
  });
