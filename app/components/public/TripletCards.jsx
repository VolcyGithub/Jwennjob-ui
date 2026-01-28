import { BiBuildings, BiMoney, BiBriefcase, BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";

export default function TripletCards() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-[650px] lg:min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Job Card */}
          <div className="absolute left-0 top-32 w-62 max-md:h-[400px] h-64 bg-secondary/50  rounded-3xl"></div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white/50 rounded-3xl p-6 relative w-full lg:w-[500px]  max-md:top[-140px] mt-6"
          >
            <div className="flex items-center justify-between mb-6 z-10 relative">
              <h2 className="text-2xl font-bold">
                Jobs{" "}
                <span className="bg-cyan-400 text-third text-sm px-2 py-1 rounded-full ml-2">
                  7k30
                </span>
              </h2>
            </div>

            <div className="bg-gray-50  rounded-3xl p-4 lg:w-[200px] shadow-sm hover:shadow-md transition mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <BiBuildings className="text-third text-lg" />
                </div>
              </div>
              <h3 className="text-xl text-primary font-semibold mb-2">Chef de projet</h3>
              <div className="flex items-center gap-2">
                <span className="text-secondary text-sm">✓</span>
                <span className="text-secondary text-xs font-medium">
                  The job is yours!
                </span>
              </div>
            </div>
          </motion.div>

          {/* Filtres Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="max-md:mt-20 max-md:py-12 py-6 bg-white/50 rounded-3xl px-6 z-10 shadow-sm mb-5 max-md:h-[240px] h-[220px] lg:w-[300px]"
          >
            <h3 className="text-lg font-bold mb-4 text-primary">Filtres</h3>
            <p className="text-xs text-primary mb-4">Filtrez les opportunités disponibles selon vos critères</p>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl  transition">
               
                  <BiBuildings className="text-xl text-secondary" />
                <span className="text-xs text-primary">Par adresse</span>
              </button>

              <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl  transition">
                <BiMoney className="text-xl text-secondary" />
                <span className="text-xs font-medium text-primary">Salaire</span>
              </button>

              <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl  transition">
                <BiBriefcase className="text-xl text-secondary" />
                <span className="text-xs font-medium text-primary">Secteur</span>
              </button>

              <button className="flex items-center justify-center gap-1 p-1 border border-gray-300 rounded-3xl  transition">
                <BiMenu className="text-xl text-secondary" />
                <span className="text-xs font-medium text-primary">Tous les filtres</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column - Discovery Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
            className="max-md:bg-primary max-md:w-[250px] w-[350px] bg-primary rounded-3xl shadow-md p-6 flex flex-col relative max-md:z-10 max-md:top-[-450px] right-[-90px] lg:top-[-60px] lg:ml-8"
          >
            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-2 mb-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop"
                alt="Office 1"
                className="rounded-2xl w-full h-24 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-third mb-3">
                Découvrez l'entreprise
              </h3>
              <div className="w-24 h-1 bg-secondary rounded"></div>
              <div className="w-20 h-1 bg-secondary rounded mt-1"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
