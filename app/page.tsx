import { Suspense } from "react";
import { fetchRegions } from "@/app/lib/data";

import Search from "@/app/ui/home/search";
import Filter from "@/app/ui/home/filter";
import CountriesGrid from "@/app/ui/home/countries-grid";
import CountriesSkeleton from "@/app/ui/home/countries-skeleton";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const regions = await fetchRegions();

  return (
    <main className="px-8 pb-8 md:px-16">
      <div className="my-8 flex justify-between flex-wrap gap-4">
        <Search />
        <Filter regions={regions} />
      </div>
      <Suspense key={query} fallback={<CountriesSkeleton />}>
        <CountriesGrid query={query} />
      </Suspense>
    </main>
  );
}
