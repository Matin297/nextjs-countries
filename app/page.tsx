import FilterForm from "./ui/home/filter-form";
import CountriesGrid from "./ui/home/countries-grid";

import { fetchRegions, fetchCountries } from "@/app/lib/data";

export default async function Page() {
  const regions = await fetchRegions();
  const countries = await fetchCountries();

  return (
    <main className="px-8 pb-8 md:px-16">
      <FilterForm regions={regions} />
      <CountriesGrid countries={countries} />
    </main>
  );
}
