import { Region } from "@/app/lib/definitions";

export default function Filter({ regions }: { regions: Region[] }) {
  return (
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
  );
}
