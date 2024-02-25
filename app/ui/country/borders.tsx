import Link from "next/link";
import { fetchCountryBorders } from "@/app/lib/data";

export default async function Borders({ countryId }: { countryId: string }) {
  const borders = await fetchCountryBorders(countryId);

  return (
    <div className="text-sm flex flex-wrap items-center gap-2">
      <span className="font-semibold whitespace-nowrap">Border Countries:</span>
      <ul className="flex flex-wrap gap-2">
        {borders.map(({ name, id }) => (
          <li key={id} className="bg-white shadow rounded p-1 dark:bg-gray-700">
            <Link href={`/country/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
