import FilterForm from "./ui/home/filter-form";
import CountriesGrid from "./ui/home/countries-grid";

export default function Page() {
  return (
    <main className="px-8 pb-8 md:px-16">
      <FilterForm />
      <CountriesGrid />
    </main>
  );
}
