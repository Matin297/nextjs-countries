export default function CountriesSkeleton() {
  return (
    <ul className="animate-pulse grid grid-cols-auto-fill gap-12">
      {Array(10)
        .fill("")
        .map((_, i) => (
          <li
            className="rounded shadow overflow-hidden bg-white dark:bg-gray-700"
            key={i}
          >
            <div className="w-full h-[250px] bg-slate-200 dark:bg-slate-300"></div>

            <div className="p-6">
              <div className="mb-6 bg-slate-200 dark:bg-slate-300 w-1/3 h-[20px]"></div>
              <div className="mb-2 bg-slate-200 dark:bg-slate-300 w-2/3 h-[15px]"></div>
              <div className="mb-2 bg-slate-200 dark:bg-slate-300 w-2/3 h-[15px]"></div>
              <div className="bg-slate-200 dark:bg-slate-300 w-2/3 h-[15px]"></div>
            </div>
          </li>
        ))}
    </ul>
  );
}
