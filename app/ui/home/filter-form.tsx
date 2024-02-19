import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Region } from "@/app/lib/definitions";

export default function FilterForm({ regions }: { regions: Region[] }) {
  return (
    <form className="my-8 flex justify-between flex-wrap gap-4">
      <div className="shadow bg-white relative rounded grow max-w-lg">
        <MagnifyingGlassIcon className="pointer-events-none h-4 w-4 absolute top-1/2 left-3 -translate-y-1/2 text-slate-500" />
        <input
          placeholder="search for a country..."
          className="rounded w-full pl-10 py-3 bg-transparent border-0 placeholder:text-sm"
        />
      </div>
      <select
        defaultValue=""
        className="shadow rounded p-3 pr-12 border-0 text-sm"
      >
        <option disabled value="">
          Filter by region
        </option>
        {regions.map((region) => (
          <option key={region.id} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
}
