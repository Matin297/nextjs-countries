import FilterForm from "./ui/home/filter-form";
import CountriesGrid from "./ui/home/countries-grid";

import { fetchRegions } from "@/app/lib/data";

export default async function Page() {
  const regions = await fetchRegions();

  return (
    <main className="px-8 pb-8 md:px-16">
      <FilterForm regions={regions} />
      <CountriesGrid />
    </main>
  );
}
