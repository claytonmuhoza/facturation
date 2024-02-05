import Link from "next/link";

export default function HomeDashboard() {
  // do something
  return (
    <main>
      HomeDashboard component
      <div>
        <Link
          href="dashboard/facture/nouveau"
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`"
        >
          Nouveau facture
        </Link>
      </div>
    </main>
  );
}
