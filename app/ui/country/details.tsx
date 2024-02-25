import { CountryDetails } from "@/app/lib/definitions";

export default function Details({ country }: { country: CountryDetails }) {
  const {
    nativename,
    population,
    region,
    subregion,
    capital,
    topleveldomain,
    currencies,
    languages,
  } = country;

  return (
    <div className="flex justify-between flex-col flex-wrap gap-8 mt-4 mb-8 md:flex-row text-sm">
      <div>
        <div className="mb-2">
          <span className="font-semibold mr-1">Native Name:</span>
          <span className="capitalize dark:text-slate-300">{nativename}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold mr-1">Population:</span>
          <span className="capitalize dark:text-slate-300">
            {population.toLocaleString()}
          </span>
        </div>
        <div className="mb-2">
          <span className="font-semibold mr-1">Region:</span>
          <span className="capitalize dark:text-slate-300">{region}</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold mr-1">Sub Region:</span>
          <span className="capitalize dark:text-slate-300">{subregion}</span>
        </div>
        <div>
          <span className="font-semibold mr-1">Capital:</span>
          <span className="capitalize dark:text-slate-300">{capital}</span>
        </div>
      </div>

      <div>
        <div className="mb-2">
          <span className="font-semibold mr-1">Top Level Domain:</span>
          <span className="capitalize">
            {topleveldomain.length > 0 ? topleveldomain : "---"}
          </span>
        </div>
        <div className="mb-2">
          <span className="font-semibold mr-1">Currencies:</span>
          <span className="capitalize">
            {currencies.map(({ code }) => code)}
          </span>
        </div>
        <div>
          <span className="font-semibold mr-1">Languages:</span>
          <span className="capitalize">
            {languages.map(({ name }) => name)}
          </span>
        </div>
      </div>
    </div>
  );
}
