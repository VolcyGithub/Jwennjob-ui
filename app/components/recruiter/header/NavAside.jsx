import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  BiPlus,
  BiListUl,
  BiBarChartAlt,
  BiUser,
  BiSearch,
  BiLogOut,
} from "react-icons/bi";

export default function NavAside({ isOpen }) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      "recruiter_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  };

  return (
    <div
      className={`fixed h-full z-40 text-sm left-0 w-[300px] lg:w-[15%] text-white p-2 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="bg-primary w-full h-full rounded-4xl">
        <div className="bg-gradient-to-b from-transparent to-black rounded-4xl w-full h-full p-4 flex flex-col">
          <Link className="flex pl-3 mt-2 mb-8 gap-1 items-center" href="/">
            <Image
              src={`/white-logo.PNG`}
              width={20}
              height={20}
              alt="Jwennjob Logo"
            />
            <span className="text-white text-md uppercase">wennjob</span>
          </Link>

          <span className="mb-2 border-b border-secondary/30 pb-2 block">
            Menu
          </span>

          <div className="navigation-bar flex-1">
            <Link
              href="/recruiter"
              className="flex mb-2 text-white p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiBarChartAlt className="size-5 text-secondary" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/recruiter/candidates"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiSearch className="size-5 text-secondary" />
              <span>Rechercher un candidat</span>
            </Link>
            <Link
              href="/recruiter/jobs/create"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiPlus className="size-5 text-secondary" />
              <span>Publier un emploi</span>
            </Link>
            <Link
              href="/recruiter/jobs"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiListUl className="size-5 text-secondary" />
              <span>Mes emplois</span>
            </Link>
            <Link
              href="/recruiter/profile"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiUser className="size-5 text-secondary" />
              <span>Mon profil</span>
            </Link>
          </div>

          {/* Bouton de déconnexion */}
          <div className="mt-auto pt-4 border-t border-secondary/30">
            <button
              onClick={handleLogout}
              className="flex w-full text-white p-3 hover:bg-red-500/20 hover:text-red-300 rounded-xl gap-2 items-center transition-colors duration-200"
            >
              <BiLogOut className="size-5 text-secondary" />
              <span>Se déconnecter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
