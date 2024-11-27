import GetPhoneServices from "@/app/components/main/GetPhoneServices";
import { ServicesType } from "@/utils/redux/Interfaces/ServicesType";

export default async function PhoneService({
  params,
}: {
  params: Promise<{ phone: string }>;
}) {
  const phoneService: ServicesType = (await params).phone as ServicesType;
  return <GetPhoneServices title={phoneService} />;
}
