import { LicenseWithRelations } from "@/app/types";

interface Props {
  license: LicenseWithRelations | null;
}

export function SublicensesList({ license }: Props) {
  return (
    <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
      {license?.subLicenses.map((subLicense) => (
        <div
          key={subLicense.id}
          className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
        >
          <div className="flex items-center gap-2 ">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{subLicense.type.name}</h3>
              <p className="text-sm text-gray-500">ID: {subLicense.id}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
