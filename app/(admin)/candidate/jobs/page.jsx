"use client"

import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";

export default function Index() {

  return (
    <div>
      <BreadCrumb items={[
        {label : "Accueil" , href: "/candidate/"},
        {label : "Trouvez un emploi"}
      ]} />
    </div>
  );
}
