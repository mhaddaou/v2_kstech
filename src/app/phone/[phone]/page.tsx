import GetPhoneServices from "@/app/components/main/GetPhoneServices";
import { ServicesType } from "@/utils/redux/Interfaces/ServicesType";

export default async function PhoneService({
  params,
}: {
  params: Promise<{ phone: string }>;
}) {
    console.log((await params).phone)
  const phoneService : ServicesType = (await params).phone as ServicesType;
  console.log(phoneService)
  return <GetPhoneServices title={phoneService}/>;
}
