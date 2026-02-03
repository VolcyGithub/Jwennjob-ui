import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiDollarSign, FiBriefcase, FiChevronRight } from "react-icons/fi";

export default function JobCard({ job }) {

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group flex flex-col bg-white/50 rounded-4xl border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all duration-300 relative h-full"
    >
      <div className="relative h-52 w-full rounded-4xl overflow-hidden mb-6">
        <Image
          src={`https://jwennjob.com/${job.recruiter.banner}` || "/og-image.webp"}
          alt={`bannière ${job.recruiter.nom}`}
          width={400}
          height={100}
          className="object-cover h-[200] w-full"
        />
      </div>

      <div className="flex-1 px-6">
        <h3 className="text-xl font-bold text-primary line-clamp-1 group-hover:text-secondary transition-colors leading-snug mb-4">
          {job.title}
        </h3>

        <div className="space-y-2 mb-10">
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <FiMapPin className="mr-2 text-secondary" />
            <p className="line-clamp-1">{job.recruiter.adresse}</p> 
          </div>
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <FiDollarSign className="mr-2 text-secondary" /> {job.salary || "Indéfini"}
          </div>
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <FiBriefcase className="mr-2 text-secondary" /> {job.sector}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 px-6">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-gray-50 shadow-inner">
            <Image
              src={job.recruiter.photo}
              alt={job.recruiter.nom}
              fill
              className="object-cover"
            />
          </div>
          <div className="block space-y-0.1">
            <p className="text-secondary font-semibold text-sm">{job.recruiter.nom}</p>
            <p className="text-gray-500 font-medium text-[11px]">{job.sector}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}