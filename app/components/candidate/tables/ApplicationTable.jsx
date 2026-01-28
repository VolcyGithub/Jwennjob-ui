import Image from "next/image";

const fakeApps = [
  {
    id: 1,
    job: "Dév Full-Stack",
    company: "AlphaTech",
    status: "En attente",
    applied: "2025-06-20",
    logo: "https://i.pravatar.cc/40?u=1",
  },
  {
    id: 2,
    job: "Designer UI",
    company: "CréaDesign",
    status: "Accepté",
    applied: "2025-06-18",
    logo: "https://i.pravatar.cc/40?u=2",
  },
  {
    id: 3,
    job: "Data Analyst",
    company: "DataCorp",
    status: "Refusé",
    applied: "2025-06-15",
    logo: "https://i.pravatar.cc/40?u=3",
  },
  {
    id: 4,
    job: "Data Analyst",
    company: "DataCorp",
    status: "Refusé",
    applied: "2025-06-15",
    logo: "https://i.pravatar.cc/40?u=4",
  }
];

const statusColors = {
  "En attente": "bg-blue-100 text-blue-700",
  Accepté: "bg-green-100 text-green-700",
  Refusé: "bg-red-100 text-red-700",
};

export default function ApplicationTable() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[800px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-900">
              <th className="px-4">Poste</th>
              <th className="px-4">Entreprise</th>
              <th className="px-4">Statut</th>
              <th className="px-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {fakeApps.map((a) => (
              <tr key={a.id} className="rounded-xl text-xs bg-white transition-shadow">
                {/* POSTE + LOGO */}
                <td className="rounded-l-xl border-y border-l border-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-500 whitespace-nowrap">
                      {a.job}
                    </span>
                  </div>
                </td>

                {/* ENTREPRISE */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      width={30}
                      height={30}
                      className="size-8 rounded-full object-cover"
                      src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp"
                      alt="Rounded avatar"
                    />

                    <span className="font-medium text-gray-500 whitespace-nowrap">
                      {a.company}
                    </span>
                  </div>
                </td>

                {/* STATUT */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[a.status]}`}
                  >
                    {a.status}
                  </span>
                </td>

                {/* DATE */}
                <td className="rounded-r-xl border-y border-r border-transparent px-4 py-3 whitespace-nowrap">
                  {a.applied}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
