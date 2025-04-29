import { ClientTypesCard } from "./components/client-types-card";
import { getClientTypes } from "./actions";

export default async function ClientsPage() {
  const types = await getClientTypes();
  return <ClientTypesCard types={types} />;
}
