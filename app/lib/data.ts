import { sql } from "@vercel/postgres";
import { Region, CountrySummary, CountryDetails } from "@/app/lib/definitions";

export async function fetchRegions() {
  try {
    const data = await sql<Region>`SELECT * FROM regions`;
    return data.rows;
  } catch (error) {
    console.log("Database error:", error);
    throw new Error("Failed to fetch regions data.");
  }
}

export async function fetchCountries(query: string, region: string) {
  try {
    const data = await sql<CountrySummary>`
        SELECT
          countries.id,
          countries.name AS "name", 
          regions.name AS "region",
          population, 
          capital, 
          flag
        FROM countries
        JOIN regions ON regions.id = countries.region_id
        WHERE
          (
            capital ILIKE ${`%${query}%`} OR
            countries.name ILIKE ${`%${query}%`} OR
            regions.name ILIKE ${`%${query}%`}
          ) AND
          regions.name ILIKE ${`%${region}%`}
      `;

    return data.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch counties data.");
  }
}

export async function fetchCountryById(id: string) {
  try {
    const data = await sql<CountryDetails>`
      SELECT
        countries.id,
        countries.name AS "name",
        regions.name AS "region",
        population,
        capital,
        flag,
        nativename,
        subregion,
        borders,
        topleveldomain,
        currencies,
        languages
      FROM countries
      JOIN regions ON regions.id = countries.region_id
      WHERE countries.id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch country data.");
  }
}
