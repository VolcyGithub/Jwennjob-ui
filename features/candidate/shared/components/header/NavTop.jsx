
import { useCandidateAuth } from "@/features/candidate/shared/contexts/CandidateContext";
import { BiBell, BiMenu } from "react-icons/bi";

export default function NavTop({ isOpen, setIsOpen }) {
  const { candidate, isLoading } = useCandidateAuth();

  return (
    <div className="p-3 z-2 fixed w-full xl:w-[85%]">
      <div className="p-4 bg-white/80 backdrop-blur rounded-3xl shadow-sm w-full">
        <div className="flex gap-3 items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-full hover:bg-gray-100"
            >
              <BiMenu className="text-primary size-6" />
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <button
              className="relative w-fit text-primary"
              aria-label="notifications"
            >
              <BiBell className="size-6" />
              <span className="sr-only">notifications</span>
              <span className="absolute -top-1 left-5 px-1 -translate-x-1/2 rounded-full bg-red-500 text-[10px] font-semibold text-white">
                0
              </span>
            </button>
            {isLoading ? (
              <div></div>
            ) : (
              <div
                className={`size-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-sm`}
              >
                {candidate.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
