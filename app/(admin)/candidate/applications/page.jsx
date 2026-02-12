import BreadCrumb from "@/components/breadcrumbs/BreadCrumb";
import ApplicationFilter from "@/features/candidate/shared/components/tables/ApplicationFilter";
import ApplicationTable from "@/features/candidate/shared/components/tables/ApplicationTable";

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
      <ApplicationTable count={20} />
    </div>
  );
}
