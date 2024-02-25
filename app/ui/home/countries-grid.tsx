import Link from "next/link";
import Image from "next/image";

import { fetchCountries } from "@/app/lib/data";

export default async function CountriesGrid({
  query,
  region,
}: {
  query: string;
  region: string;
}) {
  const countries = await fetchCountries(query, region);

  return (
    <ul className="grid grid-cols-auto-fill gap-12">
      {countries?.map((country) => (
        <li
          className="rounded shadow overflow-hidden bg-white dark:bg-gray-700"
          key={country.id}
        >
          <Link href={`/country/${country.id}`}>
            <Image
              className="w-full h-[180px] object-cover"
              src={country.flag}
              alt={`${country.name} flag`}
              width={300}
              height={150}
            />

            <section className="p-6">
              <h2 className="mb-6 font-extrabold">{country.name}</h2>

              <div>
                <span className="font-semibold mr-2">Population:</span>
                <span className="text-slate-500 dark:text-slate-300">
                  {country.population.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="font-semibold mr-2">Region:</span>
                <span className="text-slate-500 dark:text-slate-300">
                  {country.region}
                </span>
              </div>
              <div>
                <span className="font-semibold mr-2">Capital:</span>
                <span className="text-slate-500 dark:text-slate-300">
                  {country.capital}
                </span>
              </div>
            </section>
          </Link>
        </li>
      ))}
    </ul>
  );
}
