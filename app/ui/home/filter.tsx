"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Region } from "@/app/lib/definitions";

export default function Filter({ regions }: { regions: Region[] }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleChange(region: string) {
    const params = new URLSearchParams(searchParams);

    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      defaultValue={searchParams.get("region") || ""}
      className="shadow rounded p-3 pr-12 border-0 text-sm dark:bg-gray-700"
      onChange={(e) => handleChange(e.target.value)}
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
