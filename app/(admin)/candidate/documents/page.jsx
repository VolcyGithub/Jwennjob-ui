"use client";
import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import FileCardSkeleton from "@/features/candidate/shared/components/cards/FileCardSkeleton";
import CandidateDocsPage from "@/components/recruiter/cards/CandidateDocsPage";
import { useCandidateDocuments } from "@/app/lib/api/hooks/queries/useCandidates";
import Link from "next/link";
import { BiCertification, BiGridAlt, BiListUl } from "react-icons/bi";

export default function Index() {
  
  const { data: documents, isLoading, error } = useCandidateDocuments();

  return (
    <div>
      <BreadCrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Mes documents" }]}
      />

      <div className="w-full my-6 flex justify-between items-center">
        <span className="block text-primary text-2xl font-bold">
          Categories
        </span>
        <Link
          href="/candidate/documents/create"
          className="w-fit py-2 px-4 active:scale-95 transition text-xs text-white rounded-full bg-primary"
        >
          <p className="mb-0.5">Ajouter un document</p>
        </Link>
      </div>

      <div className="flex text-sm flex-wrap w-full gap-3">
        <div className="flex gap-2 items-center border cursor-pointer border-primary/10 rounded-2xl bg-primary text-white py-2 px-6 hover:border-primary">
          <BiGridAlt className="size-4" />
          <span>Tous</span>
        </div>
        <div className="flex gap-2 items-center border cursor-pointer border-primary/10 rounded-2xl bg-white py-2  px-6 hover:border-primary">
          <BiCertification className="size-4" />
          <span className="text-primary">Certificats</span>
        </div>
        <div className="flex gap-2 items-center border cursor-pointer border-primary/10 rounded-2xl bg-white py-2 px-6 hover:border-primary">
          <BiCertification className="size-4" />
          <span className="text-primary">Diplome</span>
        </div>
        <div className="flex gap-2 items-center border cursor-pointer border-primary/10 rounded-2xl bg-white py-2 px-6 hover:border-primary">
          <BiCertification className="size-4" />
          <span className="text-primary">Attestation</span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <span className="block my-8 text-primary text-xl font-bold">
          Fichiers
        </span>
        <div className="flex gap-2 p-2 bg-gray-100 rounded-xl">
          <span className="block p-1 bg-white rounded-md text-center">
            <BiGridAlt />
          </span>
          <span className="block p-1 rounded-lg text-center">
            <BiListUl />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isLoading ? (
          [1, 2, 3, 4].map((i) => <FileCardSkeleton key={i} />)
        ) : (
          <div className="col-span-4">
              <CandidateDocsPage docs={documents.data}/>
          </div>
        )}
      </div>
    </div>
  );
}
