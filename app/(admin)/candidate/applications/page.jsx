import BreadCrumb from "@/app/components/candidate/breadcrumbs/BreadCrumb";
import ApplicationFilter from "@/app/components/candidate/tables/ApplicationFilter";
import ApplicationTable from "@/app/components/candidate/tables/ApplicationTable";

export default function Index() {
  return (
    <div>
      <BreadCrumb
        items={[{ label: "Accueil", href: "/" }, { label: "Mes applications" }]}
      />
      <div className="flex my-4 justify-between w-full items-center">
        <span className="text-primary text-2xl">Mes applications</span>
      </div>
      <ApplicationFilter />
      <ApplicationTable />
    </div>
  );
}
