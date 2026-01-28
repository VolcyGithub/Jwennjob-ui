
"use client";
import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import Input from "@/app/components/recruiter/forms/Input";
import { Section } from "@/app/components/recruiter/forms/Section";
import { TextArea } from "@/app/components/recruiter/forms/TextArea";
import { useRouter } from "next/navigation";
import { useState } from "react";

/* données fictives ENTREPRISE */
const fakeCompany = {
  name: "TechHaïti SA",
  industry: "Technologie / Logiciel",
  website: "https://techhaiti.com",
  phone: "+509 28 90 1234",
  email: "contact@techhaiti.com",
  address: "126, Rue Lamarre, Port-au-Prince",
  country: "Haïti",
  city: "Port-au-Prince",
  description:
    "Leader haïtien du développement web & mobile, nous aidons les entreprises à transformer leurs idées en solutions digitales.",
  logo: "https://dummyimage.com/200x200/2a2773/ffffff&text=TH",
  founded: 2015,
  size: "50-200 employés",
  facebook: "https://facebook.com/techhaiti",
  twitter: "https://twitter.com/techhaiti",
  linkedin: "https://linkedin.com/company/techhaiti",
};

export default function Edit() {
  const router = useRouter();

  const [name, setName] = useState(fakeCompany.name);
  const [industry, setIndustry] = useState(fakeCompany.industry);
  const [website, setWebsite] = useState(fakeCompany.website);
  const [phone, setPhone] = useState(fakeCompany.phone);
  const [email, setEmail] = useState(fakeCompany.email);
  const [address, setAddress] = useState(fakeCompany.address);
  const [country, setCountry] = useState(fakeCompany.country);
  const [city, setCity] = useState(fakeCompany.city);
  const [description, setDescription] = useState(fakeCompany.description);
  const [founded, setFounded] = useState(fakeCompany.founded);
  const [size, setSize] = useState(fakeCompany.size);
  const [facebook, setFacebook] = useState(fakeCompany.facebook);
  const [twitter, setTwitter] = useState(fakeCompany.twitter);
  const [linkedin, setLinkedin] = useState(fakeCompany.linkedin);

  const handleSave = () => {
    alert("Profil entreprise mis à jour !");
    router.push("/recruiter/company");
  };

  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Accueil", href: "/recruiter" },
          { label: "Mon entreprise", href: "/recruiter/company" },
          { label: "Modifier le profil" },
        ]}
      />

      <h1 className="text-2xl font-bold text-primary my-6">Modifier le profil entreprise</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Identité */}
        <Section title="Identité de l'entreprise">
          <Input label="Nom de l'entreprise" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Secteur d'activité" value={industry} onChange={(e) => setIndustry(e.target.value)} />
          <Input label="Année de création" type="number" value={founded} onChange={(e) => setFounded(e.target.value)} />
          <Input label="Taille" value={size} onChange={(e) => setSize(e.target.value)} />
          <TextArea label="Description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Section>

        {/* Contact & localisation */}
        <Section title="Contact & localisation">
          <Input label="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Input label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Site web" value={website} onChange={(e) => setWebsite(e.target.value)} />
          <Input label="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Pays" value={country} onChange={(e) => setCountry(e.target.value)} />
            <Input label="Ville" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
        </Section>

        {/* Réseaux sociaux */}
        <Section title="Réseaux sociaux">
          <Input label="Facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
          <Input label="Twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
          <Input label="LinkedIn" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </Section>

        {/* Logo */}
        <Section title="Logo">
          <div className="flex items-center gap-4">
            <img src={fakeCompany.logo} alt="logo" className="w-20 h-20 rounded-lg object-cover" />
            <button className="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
              Changer le logo
            </button>
          </div>
        </Section>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button onClick={() => router.back()} className="px-6 py-2 rounded-full text-sm bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
          Annuler
        </button>
        <button onClick={handleSave} className="px-6 py-2 rounded-full text-sm bg-primary text-white hover:bg-indigo-700 transition">
          Sauvegarder
        </button>
      </div>
    </div>
  );
}


