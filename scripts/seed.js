const { createClient } = require("@vercel/postgres");
const { regions, countries } = require("../app/lib/placeholder-data");

async function seedRegions(client) {
  try {
    // Creating "regions" table if not exists
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS regions (
          id INT,
          name TEXT NOT NULL,

          PRIMARY KEY (id)
      );
    `;

    console.log(`Created "regions" table`);

    // Inserting data into the "regions" table
    const insertedRegions = await Promise.all(
      regions.map(
        (region) => client.sql`
          INSERT INTO regions (id, name)
          VALUES (${region.id}, ${region.name})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedRegions.length} regions`);

    return {
      createTable,
      regions: insertedRegions,
    };
  } catch (error) {
    console.error("Error seeding regions:", error);
    throw error;
  }
}

async function seedCountries(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Creating "regions" table if not exists
    const createTable = client.sql`
      CREATE TABLE IF NOT EXISTS countries (
        id UUID DEFAULT uuid_generate_v4(),
        
        cioc TEXT,
        capital TEXT,
        nativeName TEXT,
        name TEXT NOT NULL,
        flag TEXT NOT NULL,
        demonym TEXT NOT NULL,
        subregion TEXT NOT NULL,
        alpha2Code TEXT NOT NULL,
        alpha3Code TEXT NOT NULL,
        numericCode TEXT NOT NULL,
        
        area NUMERIC,
        region_id INT NOT NULL,
        population INT NOT NULL,

        independent BOOLEAN NOT NULL,

        latlng JSONB,
        borders JSONB,
        currencies JSONB,
        altSpellings JSONB,
        regionalBlocs JSONB,
        flags JSONB NOT NULL,
        languages JSONB NOT NULL,
        timezones JSONB NOT NULL,
        callingCodes JSONB NOT NULL,
        translations JSONB NOT NULL,
        topLevelDomain JSONB NOT NULL,

        PRIMARY KEY (id),
        FOREIGN KEY (region_id) REFERENCES regions(id)
      );
    `;

    console.log(`Created "countries" table`);

    // Inserting data into the "countries" table
    const insertedCountries = await Promise.all(
      countries.map(
        (country) => client.sql`
          INSERT INTO countries (
            cioc,
            capital,
            nativeName,
            name,
            flag,
            demonym,
            subregion,
            alpha2Code,
            alpha3Code,
            numericCode,
            area,
            region_id,
            population,
            independent,
            latlng,
            borders,
            currencies,
            altSpellings,
            regionalBlocs,
            flags,
            languages,
            timezones,
            callingCodes,
            translations,
            topLevelDomain
          )
          VALUES (
            ${country.cioc},
            ${country.capital},
            ${country.nativeName},
            ${country.name},
            ${country.flag},
            ${country.demonym},
            ${country.subregion},
            ${country.alpha2Code},
            ${country.alpha3Code},
            ${country.numericCode},
            ${country.area},
            ${country.region_id},
            ${country.population},
            ${country.independent},
            ${JSON.stringify(country.latlng || [])},
            ${JSON.stringify(country.borders || [])},
            ${JSON.stringify(country.currencies || [])},
            ${JSON.stringify(country.altSpellings || [])},
            ${JSON.stringify(country.regionalBlocs || [])},
            ${JSON.stringify(country.flags)},
            ${JSON.stringify(country.languages)},
            ${JSON.stringify(country.timezones)},
            ${JSON.stringify(country.callingCodes)},
            ${JSON.stringify(country.translations)},
            ${JSON.stringify(country.topLevelDomain)}
          )
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedCountries.length} countries`);

    return {
      createTable,
      countries: insertedCountries,
    };
  } catch (error) {
    console.error("Error seeding countries:", error);
    throw error;
  }
}

async function main() {
  const client = createClient();

  await client.connect();

  await seedRegions(client);
  await seedCountries(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
