import { sql } from "@vercel/postgres";
import { Region, CountrySummary } from "@/app/lib/definitions";

export async function fetchRegions() {
  try {
    const data = await sql<Region>`SELECT * FROM regions`;
    return data.rows;
  } catch (error) {
    console.log("Database error:", error);
    throw new Error("Failed to fetch regions data.");
  }
}

export async function fetchCountries(query: string) {
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
          capital ILIKE ${`%${query}%`} OR
          countries.name ILIKE ${`%${query}%`} OR
          regions.name ILIKE ${`%${query}%`}
      `;

    return data.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch counties data.");
  }
}
