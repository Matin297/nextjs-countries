import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Details from "@/app/ui/country/details";
import { fetchCountryById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const country = await fetchCountryById(params.id);

  return (
    <main className="py-8 px-6 md:px-16 md:py-12 max-w-6xl">
      <Link
        href="/"
        className="mb-16 py-2 px-6 inline-flex items-center gap-2 shadow rounded text-sm bg-white"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span>Back</span>
      </Link>

      <section className="flex flex-col gap-10 md:flex-row md:gap-16">
        <Image
          className="h-[300px] object-cover"
          src={country.flag}
          alt={`${country.name}'s flag`}
          width={400}
          height={200}
        />

        <div className="grow">
          <h2 className="font-extrabold text-xl">{country.name}</h2>
          <Details country={country} />
        </div>
      </section>
    </main>
  );
}
