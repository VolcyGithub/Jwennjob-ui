"use client"

import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";

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
