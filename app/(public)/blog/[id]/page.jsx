import Image from "next/image";
import EnterpriseTabs from "@/app/components/public/EnterpriseTabs";
import { MdVerified } from "react-icons/md";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTelegram, BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";

const blogPosts = [
  {
    id: 1,
    category: "technologie",
    title: "L'avenir des paiements mobiles en Haïti",
    teaser: "Découvrez comment la technologie révolutionne les transactions.",
    banner: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    author: "Jean Dupont",
    authorImage: "https://i.pravatar.cc/60?u=jean",
    publishDate: "2024-01-15",
    readTime: "5 min",
    description: "Les paiements mobiles transforment radicalement le paysage financier haïtien. Avec l'émergence de solutions innovantes comme les portefeuilles numériques et les transferts instantanés, les citoyens ont désormais accès à des services bancaires sans précédent. Cette révolution technologique permet aux petits entrepreneurs et aux familles de gérer leurs finances plus efficacement, réduisant les délais de transaction et les coûts associés. Découvrez comment ces avancées façonnent l'économie numérique haïtienne et créent des opportunités sans limites.",
  },
  {
    id: 2,
    category: "entrepreneuriat",
    title: "5 conseils pour lancer une startup",
    teaser: "Guide complet pour les jeunes entrepreneurs.",
    banner: "https://jwennjob.com/assets/dashboard/img/banner/file_17591697850.jpeg",
    author: "Marie Souverain",
    authorImage: "https://i.pravatar.cc/60?u=marie",
    publishDate: "2024-01-10",
    readTime: "8 min",
    description: "Lancer une startup demande vision, détermination et stratégie. Cet article détaillé vous guide à travers les cinq piliers essentiels pour transformer votre idée en entreprise prospère. De la validation de marché à la levée de fonds, en passant par la construction d'une équipe talentueuse et la gestion des risques, découvrez les meilleures pratiques adoptées par les entrepreneurs les plus réussis. Apprenez comment créer un business plan solide, identifier votre public cible, et naviguer les défis du marché avec confiance et agilité.",
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ 
    id: post.id.toString()
  }));
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));
  
  if (!post) return <div className="min-h-[80vh] flex items-center justify-center"><p className="p-10 text-center">Article introuvable</p></div>;

  return (
    <main className="bg-third min-h-screen pb-80 font-sans text-gray-900">
      {/* BANNER IMMERSIVE */}
      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden">
        <Image 
          src={post.banner} 
          alt="banner" 
          width={1600} 
          height={400} 
          className="w-full h-full object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-8 py-8 relative top-60 md:top-75">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* CONTENT Left: ARTICLE */}
          <div className="lg:col-span-8">
            {/* Header Card */}
            <div className="rounded-4xl p-8 shadow-sm bg-primary mb-16">
              <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
                <div className="w-24 h-24 rounded-3xl border-4 border-white shadow-lg overflow-hidden bg-white shrink-0">
                  <Image 
                    src={post.authorImage} 
                    alt="author" 
                    width={120} 
                    height={120} 
                    className="object-contain" 
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <h1 className="text-3xl font-black text-third">{post.title}</h1>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-gray-500 font-medium">Par {post.author}</p>
                    <MdVerified className="text-secondary" size={18} />
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-4xl p-8 shadow-sm prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{post.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 sticky top-40 h-fit">
            <div className="bg-primary rounded-4xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-4 h-1 bg-secondary" /> Infos Article
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-4xl text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Publié</p>
                    <p className="text-sm font-bold">{post.publishDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-4xl text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5m-11-4v3m6-3v3m-6 2h10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Temps lecture</p>
                    <p className="text-sm font-bold">{post.readTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-4xl text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Catégorie</p>
                    <p className="text-sm font-bold capitalize">{post.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 rounded-4xl p-8">
              <h3 className="font-black text-lg mb-6 text-primary">Partager</h3>
              <div className="flex justify-center gap-6 text-md">
              <BiLogoInstagram className="size-6 text-primary"/>
              <BiLogoTwitter className="size-6 text-primary"/>
              <BiLogoWhatsapp className="size-6 text-primary"/>
              <BiLogoTelegram className="size-6 text-primary"/>
              <BiLogoLinkedin className="size-6 text-primary"/>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
