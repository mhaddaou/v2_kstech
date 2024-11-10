import GetService from "@/app/components/main/GetService";
import { ServicesType } from "@/utils/redux/Interfaces/ServicesType";

export default async function Service({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const service : ServicesType = (await params).service as ServicesType;
  return <GetService title={service} />;
}
