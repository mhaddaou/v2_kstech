import { PhoneReparationType } from "@/utils/redux/Interfaces/PhoneServices.interface";

export default function PhoneReparation({service} : {service: PhoneReparationType}) {   
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-red-600 text-black">
            phone reapration
        </div>
    )
}