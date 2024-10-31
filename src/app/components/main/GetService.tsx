import { ServicesType } from "@/utils/redux/Interfaces/ServicesType";
import TraditionalTelephony from "./TraditionalTelephony";
import StructuredCabling from "./StructuredCabling";
import ItEquipmentInstallation from "./ItEquipmentInstallation";
import ResidentialCablingAutomation from "./ResidentialCablingAutomation";
import IpTelephony from "./IpTelephony";
import BusinessTelephony from "./BusinessTelephony";
export default function GetService({ title }: { title: ServicesType }) {
  return (
    <div className="w-screen h-[calc(100vh-60px)] min-h-[calc(100vh-60px)] bg-background">
      <div className="w-full h-full container flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-blueDark">
          {title === ServicesType["structured-cabling"] && (
            <StructuredCabling />
          )}
          {title === ServicesType["residential-cabling-automation"] && (
            <ResidentialCablingAutomation />
          )}
          {title === ServicesType["it-equipment-installation"] && (
            <ItEquipmentInstallation />
          )}
          {title === ServicesType["traditional-telephony"] && (
            <TraditionalTelephony />
          )}
          {title === ServicesType["ip-telephony"] && <IpTelephony />}
          {title === ServicesType["business-telephony"] && (
            <BusinessTelephony />
          )}
        </h1>
      </div>
    </div>
  );
}
