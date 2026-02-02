import Image from "next/image";
import Link from "next/link";
import {
  BiGridAlt,
  BiFile,
  BiUserCircle,
  BiSearch,
  BiBriefcase,
} from "react-icons/bi";

export default function NavAside({ isOpen }) {
  return (
    <div
      className={`fixed h-full z-40 text-sm left-0 w-[300px] xl:w-[15%] text-white p-2 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
    >
      <div className="bg-primary rounded-4xl w-full h-full p-4">
        <div className="flex pl-3 mt-2 mb-8 gap-2 items-center">
          <Link href="/">
            <Image
              src={`/white-logo.PNG`}
              width={20}
              height={20}
              alt="Jwennjob Logo"
            />
          </Link>

          <span className="text-white text-md uppercase">wennjob</span>
        </div>

        <span className="mb-2 border-b border-secondary/30 pb-2 block">
          Menu
        </span>

        <div className="navigation-bar">
          <Link
            href="/candidate"
            className="flex mb-2 text-white p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
          >
            <BiGridAlt className="size-5 text-secondary" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/candidate/applications"
            className="flex items-center justify-between text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
          >
            <div className="flex items-center gap-3">
              <BiBriefcase className="size-5 text-secondary" />
              <span>Mes applications</span>
            </div>
            <span className="px-[8px] text-xs font-bold py-1 bg-red-500 rounded-full">
              2
            </span>
          </Link>
          <Link
            href="/candidate/documents"
            className="flex items-center justify-between text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
          >
            <div className="flex items-center gap-3">
              <BiFile className="size-5 text-secondary" />
              <span>Mes documents</span>
            </div>
            <span className="px-[8px] text-xs font-bold py-1 bg-red-500 rounded-full">
              5
            </span>
          </Link>
          <Link
            href="/candidate/jobs"
            className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
          >
            <BiSearch className="size-5 text-secondary" />
            <span>Trouver un emploi</span>
          </Link>
          <Link
            href="/candidate/saved"
            className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
          >
            <BiFile className="size-5 text-secondary" />
            <span>Emplois sauvegardés</span>
          </Link>
          <Link
            href="/candidate/profile"
            className="flex text-white mb-2 p-3 hover:bg-secondary/10 rounded-xl gap-2 items-center"
          >
            <BiUserCircle className="size-5 text-secondary" />
            <span>Mon profil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
