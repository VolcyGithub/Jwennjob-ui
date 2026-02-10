"use client";
import { useState } from "react";
import JobDetailSkeleton from "@/app/components/public/details/JobDetailSkeleton";
import { useJob } from "@/app/lib/api/hooks/queries/useJobs";
import { useCandidateConnected } from "@/app/lib/contexts/ConnectContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaBookmark,
  FaInstagram,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  IoLocation,
  IoTime,
  IoCash,
  IoCalendar,
  IoBriefcase,
} from "react-icons/io5";
import {
  MdPlayCircleFilled,
  MdArrowForward,
  MdWork,
  MdClose,
} from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCandidateApply,
  useCandidateSave,
} from "@/app/lib/api/hooks/mutations/useCandidateAction";
import Alert from "@/app/components/recruiter/alerts/Alert";

export default function JobDetailPage() {
  const { id } = useParams();
  const { data: details, isLoading, error } = useJob(id);
  const { isConnected } = useCandidateConnected();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // ✅ Hook pour postuler
  const {
    mutate,
    isPending: isApplyPending,
    isSuccess: isApplySuccess,
    isError: isApplyError,
    error: applyError,
  } = useCandidateApply();

  // ✅ Hook pour sauvegarder (renommage des variables pour éviter les conflits)
  const {
    mutate: saveMutate,
    isPending: isSavePending,
    isSuccess: isSaveSuccess,
    isError: isSaveError,
    error: saveError,
  } = useCandidateSave();

  if (isLoading) {
    return <JobDetailSkeleton />;
  }

  const job = details.data;

  // ✅ Gestion de la candidature
  const handleApply = () => {
    if (!isConnected) {
      setShowModal(true);
    } else {
      mutate(id, {
        onSuccess: () => {
          setSuccessMessage("Votre candidature a été envoyée avec succès !");
          setShowSuccessModal(true);
        },
      });
    }
  };

  // ✅ Gestion de la sauvegarde
  const handleSave = () => {
    if (!isConnected) {
      setShowModal(true);
    } else {
      saveMutate(id, {
        onSuccess: () => {
          setSuccessMessage("Offre sauvegardée avec succès !");
          setShowSuccessModal(true);
        },
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const applyErrorMessage =
    applyError?.response?.data?.message ||
    "Une erreur est survenue lors de l'envoi de votre candidature.";
  const saveErrorMessage =
    saveError?.response?.data?.message ||
    "Une erreur est survenue lors de la sauvegarde de l'offre.";

  return (
    <main className="bg-[#fdfdfd] min-h-screen pb-100 font-sans text-gray-900 relative">
      {/* Modal de connexion requise */}
      <AnimatePresence>
        {!isConnected && showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="group grid rounded-4xl max-w-4xl w-full grid-cols-1 md:grid-cols-8 overflow-hidden border border-gray-200 bg-white text-gray-900"
            >
              {/* Image */}
              <div className="col-span-1 md:col-span-4 overflow-hidden relative h-60 md:h-full">
                <Image
                  src="/Interview.gif"
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  alt="Inscription requise"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col justify-center p-6 col-span-1 md:col-span-4 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <MdClose className="text-xl" />
                </button>

                <small className="mb-4 font-medium text-secondary flex items-center gap-1">
                  <IoLocation className="size-4" />
                  Connexion Requise
                </small>

                <h3 className="text-balance text-xl font-bold text-primary lg:text-2xl">
                  Postulez à cette offre
                </h3>

                <p className="my-4 max-w-lg text-pretty text-sm text-gray-600">
                  Vous devez être connecté pour postuler à cette offre d'emploi.
                  Créez un compte ou connectez-vous pour accéder à toutes les
                  opportunités.
                </p>

                <div className="flex flex-col gap-3 mt-2">
                  <Link
                    href="/signin/candidate"
                    className="whitespace-nowrap block bg-secondary px-4 py-3 text-center text-sm font-medium tracking-wide text-white transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:opacity-100 active:outline-offset-0 rounded-full"
                  >
                    Se connecter
                  </Link>

                  <Link
                    href="/signup/candidate"
                    className="whitespace-nowrap block bg-primary px-4 py-3 text-center text-sm font-medium tracking-wide text-white transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:opacity-100 active:outline-offset-0 rounded-full"
                  >
                    Créer un compte
                  </Link>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="whitespace-nowrap bg-gray-200 px-4 py-3 text-center text-sm font-medium tracking-wide text-gray-700 transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 active:opacity-100 active:outline-offset-0 rounded-full"
                  >
                    Plus tard
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de succès générique */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSuccessModal}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-4xl max-w-md w-full p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Succès !</h3>
              <p className="text-gray-600 mb-6">{successMessage}</p>
              <button
                onClick={closeSuccessModal}
                className="bg-secondary text-white px-6 py-3 rounded-full font-bold hover:opacity-75 transition-opacity"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bg-primary top-0 left-0 w-full h-[400px] 2xl:h-[500px] overflow-hidden"></div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 py-8 relative top-32 md:top-90">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="border border-gray-100 rounded-4xl p-4 md:p-8 shadow-sm mb-8 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-fit p-1 bg-white">
                      <Image
                        src={job.recruiter.logo}
                        alt={job.recruiter.nom}
                        width={100}
                        height={100}
                        className="object-contain rounded-md"
                      />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wide">
                      {job.company}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl text-primary font-bold mb-6 leading-tight">
                    {job.title}
                  </h1>

                  <div className="gap-y-4 text-sm">
                    <div className="flex flex-1 md:space-x-12 space-y-8 mb-6 flex-wrap md:flex-nowrap items-center">
                      <div className="space-y-3">
                        <h3 className="font-bold text-md mb-4 uppercase text-gray-500">
                          Résumé du poste
                        </h3>
                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                          <IoBriefcase className="text-gray-400" /> {job.sector}
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                          <IoLocation className="text-gray-400" />{" "}
                          {job.recruiter.adresse}
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                          <IoTime className="text-gray-400" /> Télétravail
                          autorisé
                        </p>
                      </div>
                      <div className="h-[150px] min-h-[1em] hidden md:block w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
                      <div className="space-y-3">
                        <h3 className="font-bold text-md mb-4 uppercase text-gray-500">
                          Compétences & expertises
                        </h3>
                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                          <IoCash className="text-gray-400" />{" "}
                          {job.salary || "Indéfini"}
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                          <IoCalendar className="text-gray-400" /> Début : ASAP
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 font-medium">
                          <MdWork className="text-gray-400" /> Expérience :{" "}
                          {job.experience}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ✅ Alertes d'erreur pour postuler */}
                  {isApplyError && (
                    <Alert
                      type="danger"
                      autoClose={true}
                      autoCloseDelay={4000}
                      title="Erreur de candidature"
                    >
                      {applyErrorMessage}
                    </Alert>
                  )}

                  {/* ✅ Alertes d'erreur pour sauvegarder */}
                  {isSaveError && (
                    <Alert
                      type="danger"
                      autoClose={true}
                      autoCloseDelay={4000}
                      title="Erreur de sauvegarde"
                    >
                      {saveErrorMessage}
                    </Alert>
                  )}

                  
                  <div className="flex mt-4 gap-3 w-full md:w-auto shrink-0">
                    {/* Bouton Postuler */}
                    <button
                      onClick={handleApply}
                      disabled={isApplyPending}
                      className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isApplyPending ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </>
                      ) : (
                        "Postuler"
                      )}
                    </button>

                    <button
                      onClick={handleSave}
                      disabled={isSavePending}
                      className={`flex items-center justify-center gap-2 border-2 font-bold py-3 px-8 rounded-full transition-all
                      border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isSavePending ? (
                        <svg
                          className="animate-spin h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                          <FaBookmark className="text-gray-400" /> Sauvegarder
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f8f8] rounded-4xl p-4 md:p-8 mb-8">
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="w-6 h-1 bg-secondary" /> Le poste
              </h2>

              <div className="space-y-10">
                <section>
                  <h3 className="font-bold text-lg mb-4">
                    Descriptif du poste
                  </h3>
                  <p
                    className="text-gray-700 space-y-3 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  ></p>
                </section>
              </div>
            </div>

            <div className="bg-white rounded-4xl p-4 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-black mb-8">
                Envie d'en savoir plus ?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((v) => (
                  <div
                    key={v}
                    className="group relative aspect-video rounded-4xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={job.recruiter.banner}
                      alt="Video thumb"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
                    <MdPlayCircleFilled
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90"
                      size={64}
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-sm">
                        Rencontrez l'équipe {v}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6 sticky top-40 h-fit">
            <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-41">
                <Image
                  src={job.recruiter.banner}
                  alt={job.recruiter.nom}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-primary">
                <h3 className="text-white text-xl font-bold mb-4">
                  Découvrez l'entreprise
                </h3>
                <p className="text-xs font-medium mb-6 text-gray-300">
                  Explorez la vitrine de l'entreprise ou suivez-la pour savoir
                  si elle vous correspond vraiment !
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/enterprises/${job.recruiter.id}`}
                    className="bg-secondary text-white py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2"
                  >
                    Explorer l'entreprise <MdArrowForward />
                  </Link>
                  <button className="bg-white/20 hover:bg-white/30 text-white py-3 rounded-full font-bold text-sm transition-all border border-black/10">
                    Suivre
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-black text-lg mb-6 flex items-center gap-2">
                <span className="w-4 h-1 bg-secondary" /> L'entreprise
              </h3>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={job.recruiter.logo}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="font-bold">{job.recruiter.nom}</span>
              </div>

              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <p className="flex items-center gap-2">
                  <IoLocation size={18} /> {job.recruiter.adresse}
                </p>
                <p className="flex items-center gap-2">
                  <MdWork size={18} /> {job.recruiter.sector}
                </p>
                <p className="flex items-center gap-2">
                  <IoCalendar size={18} /> {job.recruiter.founded}
                </p>
              </div>

              <Link
                href={job.recruiter.lien_website}
                className="flex items-center gap-2 text-secondary font-bold hover:underline mb-4"
              >
                Voir le site <FaExternalLinkAlt size={12} />
              </Link>
              <Link
                href={`/enterprises/${job.recruiter.id}`}
                className="flex items-center gap-2 text-secondary font-bold hover:underline"
              >
                Voir toutes les offres{" "}
                <span className="bg-secondary/10 px-2 py-0.5 rounded text-xs">
                  12
                </span>
              </Link>
            </div>

            <div className="flex justify-center gap-6 py-4">
              <FaLinkedin
                size={22}
                className="text-gray-400 hover:text-secondary cursor-pointer"
              />
              <FaInstagram
                size={22}
                className="text-gray-400 hover:text-secondary cursor-pointer"
              />
              <FaTwitter
                size={22}
                className="text-gray-400 hover:text-secondary cursor-pointer"
              />
              <FaYoutube
                size={22}
                className="text-gray-400 hover:text-secondary cursor-pointer"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
