import { getLicensesType } from "./actions";
import { LicenseTypesCard } from "./components/license-types-card";

export default async function LicensesPage() {
  const types = await getLicensesType();
  return <LicenseTypesCard types={types} />;
}
