import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function FilterForm() {
  return (
    <form className="flex justify-between flex-wrap gap-4">
      <div className="shadow bg-white relative">
        <MagnifyingGlassIcon className="pointer-events-none h-4 w-4 absolute top-1/2 left-2 -translate-y-1/2" />
        <input placeholder="search for a country..." className="pl-8 py-3" />
      </div>
      <select defaultValue="" className="shadow">
        <option disabled value="">
          Filter by region
        </option>
        <option>Asia</option>
        <option>America</option>
        <option>Europe</option>
      </select>
    </form>
  );
}
