"use client";

export default function HowItWorks() {
  const steps = [
    {
      emoji: "📝",
      title: "1. Crée ton profil en 3 min",
      desc: "Réponds à 5 questions, ajoute un selfie ou un CV. Même par WhatsApp.",
    },
    {
      emoji: "🎯",
      title: "2. Reçois des offres sur-mesure",
      desc: "Notre algo localise les jobs à moins de 30 min de chez toi et qui match ton niveau.",
    },
    {
      emoji: "🚀",
      title: "3. Postule en un clic",
      desc: "Le recruteur est notifié instantanément ; 87 % des candidats ont une réponse sous 48 h.",
    },
  ];

  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
          Trouver un job en Haïti, c’est maintenant <span className="text-primary">plus simple</span>
        </h2>
        <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
          Pas de frais, pas de paperasse. Juste ton talent et ton téléphone.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center text-center p-6 rounded-4xl border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{s.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/inscription"
            className="bg-secondary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Je crée mon profil maintenant
          </a>
        </div>
      </div>
    </section>
  );
}