import { DeviceTypesCard } from "./components/device-types-card";
import { getDevicesType } from "./actions";

export default async function DevicesPage() {
  const types = await getDevicesType();
  return <DeviceTypesCard types={types} />;
}
