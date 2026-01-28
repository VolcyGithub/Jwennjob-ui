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
          src={job.banner || "/og-image.webp"}
          alt={`bannière ${job.company}`}
          width={400}
          height={100}
          className="object-cover"
        />
      </div>

      <div className="flex-1 px-6">
        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-snug mb-1">
          {job.title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-400 font-medium">
            <FiMapPin className="mr-2 text-secondary" /> {job.location}
          </div>
          <div className="flex items-center text-sm text-gray-400 font-medium">
            <FiDollarSign className="mr-2 text-secondary" /> {job.salary}
          </div>
          <div className="flex items-center text-sm text-gray-400 font-medium">
            <FiBriefcase className="mr-2 text-secondary" /> {job.type}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 px-6">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-gray-50 shadow-inner">
            <Image
              src={job.logo}
              alt={job.company}
              fill
              className="object-cover"
            />
          </div>
          <div className="block space-y-0.5">
            <p className="text-secondary font-semibold text-sm">{job.company}</p>
            <p className="text-gray-500 font-medium text-xs">{job.sector}</p>
          </div>
        </div>

        <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Voir l'offre <FiChevronRight />
        </span>
      </div>
    </Link>
  );
}