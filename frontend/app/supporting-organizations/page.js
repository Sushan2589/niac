import Link from "next/link";
import Image from "next/image";
import { organizations } from "@/data/organizations";

export const metadata = {
  title: "Supporting Organizations | Asia ADR Summit 2027",
};

export default function SupportingOrganizationsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <Link href="/" className="text-sm text-[#c9a961] hover:underline">
        ← Back to home
      </Link>

      <h1 className="text-center text-3xl md:text-4xl mt-6 mb-12">
        Supporting Organizations
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 items-center">
        {organizations.map((org) => {
          const logo = (
            <div className="relative h-20 w-full">
              <Image
                src={org.logo}
                alt={org.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-contain"
              />
            </div>
          );

          return org.url ? (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {logo}
            </a>
          ) : (
            <div key={org.name}>{logo}</div>
          );
        })}
      </div>
    </main>
  );
}