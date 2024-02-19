import { sql } from "@vercel/postgres";
import { Region } from "@/app/lib/definitions";

export async function fetchRegions() {
  try {
    const data = await sql<Region>`SELECT * FROM regions`;
    return data.rows;
  } catch (error) {
    console.log("Database error:", error);
    throw new Error("Failed to fetch regions data.");
  }
}
