import Image from "next/image";
import {
  BiCheck,
  BiCheckCircle,
  BiMinus,
  BiSolidCheckCircle,
  BiUserCheck,
  BiUserX,
} from "react-icons/bi";

const fakeApps = [
  {
    id: 1,
    job: "Dév Full-Stack",
    company: "AlphaTech",
    status: "En attente",
    applied: "2025-06-20",
    logo: "https://i.pravatar.cc/40?u=1",
    profileCompletion: 75,
    cvCompletion: 90,
    isVerified: true,
  },
  {
    id: 2,
    job: "Designer UI",
    company: "CréaDesign",
    status: "Accepté",
    applied: "2025-06-18",
    logo: "https://i.pravatar.cc/40?u=2",
    profileCompletion: 45,
    cvCompletion: 60,
    isVerified: false,
  },
  {
    id: 3,
    job: "Data Analyst",
    company: "DataCorp",
    status: "Refusé",
    applied: "2025-06-15",
    logo: "https://i.pravatar.cc/40?u=3",
    profileCompletion: 100,
    cvCompletion: 100,
    isVerified: true,
  },
  {
    id: 4,
    job: "Data Analyst",
    company: "DataCorp",
    status: "Refusé",
    applied: "2025-06-15",
    logo: "https://i.pravatar.cc/40?u=4",
    profileCompletion: 30,
    cvCompletion: 20,
    isVerified: false,
  },
];

const statusColors = {
  "En attente": "bg-blue-100 text-blue-700",
  Accepté: "bg-green-100 text-green-700",
  Refusé: "bg-red-100 text-red-700",
};

const getProgressColor = (value) =>
  value >= 80 ? "bg-primary" : "bg-primary/100";

export default function Application() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-[1000px] md:w-full border-separate border-spacing-y-[15px] text-left text-sm text-gray-700">
          {/* HEAD */}
          <thead>
            <tr className="text-xs font-bold text-gray-900">
              <th className="px-4">Poste</th>
              <th className="px-4">Candidat</th>
              <th className="px-4">Statut</th>
              <th className="px-4">Profil</th>
              <th className="px-4">CV</th>
              <th className="px-4">Vérifié</th>
              <th className="px-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {fakeApps.map((a) => (
              <tr
                key={a.id}
                className="rounded-xl border border-white hover:border-primary text-xs bg-white transition-shadow"
              >
                {/* POSTE */}
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
                      src={a.logo}
                      alt={`${a.company} logo`}
                    />
                    <span className="font-medium text-gray-500 whitespace-nowrap">
                      {a.company}
                    </span>
                  </div>
                </td>

                {/* STATUT */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-medium ${statusColors[a.status]}`}
                  >
                    {a.status}
                  </span>
                </td>

                {/* COMPLETION PROFIL */}
                <td className="border-y border-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-30 bg-gray-200 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full ${getProgressColor(a.profileCompletion)}`}
                        style={{ width: `${a.profileCompletion}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">
                      {a.profileCompletion}%
                    </span>
                  </div>
                </td>

                {/* COMPLETION CV */}
                <td className="border-y border-transparent px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-30 bg-gray-200 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full ${getProgressColor(a.cvCompletion)}`}
                        style={{ width: `${a.cvCompletion}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-medium text-gray-600">
                      {a.cvCompletion}%
                    </span>
                  </div>
                </td>

                {/* STATUT VERIFICATION */}
                <td className="rounded-r-xl border-y border-r border-transparent px-4 py-3 whitespace-nowrap text-center">
                  {a.isVerified ? (
                    <BiSolidCheckCircle
                      className="w-5 h-5 text-primary mx-auto"
                      title="Vérifié"
                    />
                  ) : (
                    <BiMinus
                      className="size-6 text-gray-400 mx-auto"
                      title="Non vérifié"
                    />
                  )}
                </td>

                {/* DATE */}
                <td className="border-y border-transparent px-4 py-3 whitespace-nowrap">
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
