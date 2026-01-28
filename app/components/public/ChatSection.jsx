import { motion } from "framer-motion";
import TitleHead from "./TitleHead";

const messages = [
  {
    from: "candidate",
    avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    text: "J’ai vu que tu as un nouveau poste, félicitations !",
  },
  {
    from: "jwennjob",
    avatar: "https://jwennjob.com/assets/j-logo.png",
    text: "Merci ! Je l'ai décroché grâce à JwennJob.",
  },
  {
    from: "candidate",
    avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    text: "Ah bon ? C'est quoi la différence avec un site d'annonces classique ?",
  },
  {
    from: "jwennjob",
    avatar: "https://jwennjob.com/assets/j-logo.png",
    text: "C’est beaucoup plus ciblé. Tu remplis tes compétences et la plateforme fait le match. Les entreprises te trouvent directement grâce à un filtrage intelligent.",
  },
  {
    from: "jwennjob", // Note: J'ai séparé le message long pour un effet "chat" plus réaliste
    avatar: "https://jwennjob.com/assets/j-logo.png",
    text: "Ça m’a évité d'envoyer des dizaines de CV au hasard.",
  },
  {
    from: "candidate",
    avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    text: "Et ça a vraiment été rapide pour toi ?",
  },
  {
    from: "jwennjob",
    avatar: "https://jwennjob.com/assets/j-logo.png",
    text: "Oui ! J'ai été contacté pour une offre qui collait exactement à mon profil. C'est simple et efficace.",
  },
];

export default function ChatSection() {
  return (
    <section className="mx-auto relative max-w-7xl md:rounded-4xl px-6 md:px-8 2xl:px-12 2xl:max-w-screen-2xl py-20 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute md:rounded-4xl bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#35bdf233_1px,#2a2773_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_115%_80%_at_50%_0%,#000_85%,transparent_110%)]"></div>
      
      <div className="relative z-10">
        <TitleHead
          title="Le recrutement, enfin à votre avantage"
          subtitle="Offres ciblées, profils visibles & candidatures centralisées en un seul endroit!"
          className="mb-16"
          titleClass="text-white text-3xl md:text-5xl"
          subtitleClass="text-secondary/80"
        />

        <div className="">
          <ul className="space-y-6 relative">
            {messages.map((msg, index) => {
              const isCandidate = msg.from === "candidate";
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-end ${
                    isCandidate ? "justify-start" : "justify-end"
                  } gap-x-3`}
                >
                  {isCandidate && (
                    <img
                      className="size-10 rounded-full border-2 border-secondary/30 mb-6"
                      src={msg.avatar}
                      alt="User"
                    />
                  )}

                  <div className={`flex flex-col ${isCandidate ? "items-start" : "items-end"} max-w-[85%] md:max-w-[70%]`}>
                    <div
                      className={`rounded-4xl px-5 py-3 shadow-lg ${
                        isCandidate
                          ? "bg-secondary text-primary rounded-bl-none"
                          : "bg-white text-primary rounded-br-none"
                      }`}
                    >
                      <p className="text-sm md:text-base font-medium leading-relaxed">
                        {msg.text}
                      </p>
                    </div>

                    <span className="mt-1 flex items-center gap-x-1 text-[10px] uppercase tracking-wider text-secondary/60">
                      {isCandidate ? "Vu" : "Distribué"}
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>

                  {!isCandidate && (
                    <div className="size-10 rounded-full bg-white p-1.5 shadow-md mb-6 border-2 border-white">
                      <img className="size-full object-contain" src={msg.avatar} alt="Jwennjob" />
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}