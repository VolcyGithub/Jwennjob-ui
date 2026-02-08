import Link from "next/link";
import {
  BiSolidCheckCircle,
  BiUser,
} from "react-icons/bi";
import ProgressRing from "../stats/ProgressRing";
import Image from "next/image";

export default function CandidateCard({ data }) {
  const {
    id = 1,
    name = "Claire Dubois",
    title = "Développeuse Full-Stack",
    location = "Paris, FR",
    email = "claire@example.com",
    phone = "+33 6 12 34 56 78",
    avatar = "https://i.pravatar.cc/120?u=claire",
    profileCompletion = 78,
    cvCompletion = 92,
    verified = true,
    skills = ["React", "Node", "TypeScript", "GraphQL", "Docker"],
  } = data || {};


  return (
    <div className="w-full border border-white transition cursor-pointer hover:border-primary bg-white rounded-4xl p-6 gap-4">
      
      <div className="flex relative w-full gap-6 items-center">
        {verified && (
          <div className="absolute left-12 top-13">
            <BiSolidCheckCircle className="text-xl bg-white text-primary shadow-lg rounded-full" />
          </div>
        )}
        <Image
          width={100}
          height={100}
          referrerPolicy="no-referrer"
          src={avatar}
          alt={name}
          className="w-18 h-18 rounded-full object-cover"
        />

        <div className="space-y">
          <div className="flex gap-3 items-center">
            <h3 className="text-md font-semibold text-gray-900">{name}</h3>
          </div>

          <p className="text-sm text-gray-500">{title}</p>
          <div className="mt-2 flex gap-2 flex-wrap text-xs text-gray-400 ">
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="flex mt-6 items-center gap-6">
        <div>
          <h4 className="text-xs font-semibold text-gray-700 mb-2">
            Compétences
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 relative">
        <Link
          href={`/recruiter/candidates/${id}`}
          className="absolute flex gap-2 items-center bottom-2 right-0 px-4 py-1 text-xs border border-primary rounded-full text-white bg-primary transition hover:bg-white hover:border-primary hover:text-primary"
        >
          <BiUser />
          Profil
        </Link>
        <h4 className="text-xs font-semibold text-gray-700 mb-4">Stats</h4>
        <div className="flex gap-4 items-center">
          <ProgressRing
            percent={profileCompletion}
            color="#2a2773"
            label="Profil"
          />
          <ProgressRing percent={cvCompletion} color="#2a2773" label="CV" />
        </div>
      </div>
    </div>
  );
}
