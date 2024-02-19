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

export async function fetchCountries() {
  try {
    const data = await sql<CountrySummary>`
        SELECT
            countries.id AS "id",
            countries.name AS "name", 
            population, 
            capital, 
            flag,
            regions.name AS "region" 
        FROM countries
        JOIN regions ON regions.id = countries.region_id
      `;
    return data.rows;
  } catch (error) {
    console.log("Database error:", error);
    throw new Error("Failed to fetch counties data.");
  }
}
