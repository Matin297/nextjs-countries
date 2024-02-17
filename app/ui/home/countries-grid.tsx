import Link from "next/link";
import Image from "next/image";

export default function CountriesGrid() {
  return (
    <ul className="grid grid-cols-auto-fill gap-12">
      {Array(10)
        .fill(1)
        .map((i) => (
          <li className="rounded shadow overflow-hidden" key={i}>
            <Link href="/country/1">
              <Image
                className="w-full"
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
                alt="country name flag"
                width={300}
                height={150}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}
