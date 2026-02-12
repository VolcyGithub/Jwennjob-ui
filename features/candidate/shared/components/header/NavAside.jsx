"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiGridAlt, BiFile, BiUserCircle, BiSearch,BiBriefcase,BiLogOut,} from "react-icons/bi";
import { useCandidateAuth } from "@/features/candidate/shared/contexts/CandidateContext";

export default function NavAside({ isOpen, setIsOpen }) {

  const {candidate , isLoading , error} = useCandidateAuth();

  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      "candidate_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
  };

  return (
    <div
      className={`fixed h-full z-40 text-sm left-0 w-[300px] xl:w-[15%] text-white p-2 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
    >
      <div className="bg-primary rounded-4xl w-full h-full">
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
              onClick={() => setIsOpen((isOpen = false))}
              href="/candidate"
              className="flex mb-2 text-white p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiGridAlt className="size-5 text-secondary" />
              <span>Dashboard</span>
            </Link>
            <Link
              onClick={() => setIsOpen((isOpen = false))}
              href="/candidate/applications"
              className="flex items-center justify-between text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <div className="flex items-center gap-2">
                <BiBriefcase className="size-5 text-secondary" />
                <span>Mes applications</span>
              </div>
              <span className="px-[8px] text-xs font-bold py-1 bg-red-500 rounded-full">
                {candidate.applications_count}
              </span>
            </Link>
            <Link
              onClick={() => setIsOpen((isOpen = false))}
              href="/candidate/documents"
              className="flex items-center justify-between text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <div className="flex items-center gap-2">
                <BiFile className="size-5 text-secondary" />
                <span>Mes documents</span>
              </div>
              <span className="px-[8px] text-xs font-bold py-1 bg-red-500 rounded-full">
                {candidate.documents_count}
              </span>
            </Link>
            <Link
              onClick={() => setIsOpen((isOpen = false))}
              href="/candidate/jobs"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiSearch className="size-5 text-secondary" />
              <span>Trouver un emploi</span>
            </Link>
            <Link
              onClick={() => setIsOpen((isOpen = false))}
              href="/candidate/saved"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiFile className="size-5 text-secondary" />
              <span>Emplois sauvegardés</span>
            </Link>
            <Link
              onClick={() => setIsOpen((isOpen = false))}
              href="/candidate/profile"
              className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
            >
              <BiUserCircle className="size-5 text-secondary" />
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
