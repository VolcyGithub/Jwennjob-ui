import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";


export default function Index() {
  return (
    <div>
      <BreadCrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Emplois sauvegardés" }]}
      />
    </div>
  );
}
