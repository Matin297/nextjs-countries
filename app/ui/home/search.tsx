"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="shadow bg-white relative rounded grow max-w-lg">
      <MagnifyingGlassIcon className="pointer-events-none h-4 w-4 absolute top-1/2 left-3 -translate-y-1/2 text-slate-500 dark:text-white" />
      <input
        defaultValue={searchParams.get("query") || ""}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="search for a country..."
        className="rounded w-full pl-10 py-3 bg-transparent border-0 placeholder:text-sm dark:placeholder:text-white dark:bg-gray-700"
      />
    </div>
  );
}
