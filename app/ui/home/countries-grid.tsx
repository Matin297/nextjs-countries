import Link from "next/link";
import Image from "next/image";

import { CountrySummary } from "@/app/lib/definitions";

export default function CountriesGrid({
  countries,
}: {
  countries: CountrySummary[];
}) {
  return (
    <ul className="grid grid-cols-auto-fill gap-12">
      {countries.map((country) => (
        <li
          className="rounded shadow overflow-hidden bg-white"
          key={country.id}
        >
          <Link href={`/country/${country.id}`}>
            <Image
              className="w-full"
              src={country.flag}
              alt={`${country.name} flag`}
              width={300}
              height={150}
            />

            <section className="p-6">
              <h2 className="mb-6 font-extrabold">{country.name}</h2>

              <div>
                <span className="font-semibold mr-2">Population:</span>
                <span className="text-gray-500">
                  {country.population.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="font-semibold mr-2">Region:</span>
                <span className="text-gray-500">{country.region}</span>
              </div>
              <div>
                <span className="font-semibold mr-2">Capital:</span>
                <span className="text-gray-500">{country.capital}</span>
              </div>
            </section>
          </Link>
        </li>
      ))}
    </ul>
  );
}
