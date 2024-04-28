DROP TABLE "countries";--> statement-breakpoint
ALTER TABLE "cities" DROP CONSTRAINT "cities_country_id_countries_id_fk";
--> statement-breakpoint
ALTER TABLE "cities" DROP COLUMN IF EXISTS "country_id";