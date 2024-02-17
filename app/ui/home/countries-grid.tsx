import Link from "next/link";
import Image from "next/image";

export default function CountriesGrid() {
  return (
    <ul className="grid grid-cols-auto-fill gap-12">
      {Array(10)
        .fill(1)
        .map((i) => (
          <li className="rounded shadow overflow-hidden bg-white" key={i}>
            <Link href="/country/1">
              <Image
                className="w-full"
                src="https://flagcdn.com/al.svg"
                alt="country name flag"
                width={300}
                height={150}
              />

              <section className="p-6">
                <h2 className="mb-6 font-extrabold">Country Name</h2>

                <div>
                  <span className="font-semibold mr-2">Population:</span>
                  <span className="text-gray-500">
                    {(23000000).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="font-semibold mr-2">Region:</span>
                  <span className="text-gray-500">Europe</span>
                </div>
                <div>
                  <span className="font-semibold mr-2">Capital:</span>
                  <span className="text-gray-500">Berlin</span>
                </div>
              </section>
            </Link>
          </li>
        ))}
    </ul>
  );
}
