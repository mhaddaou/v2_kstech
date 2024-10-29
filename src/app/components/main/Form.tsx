"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Input } from "../ui/input";
import { cn } from "@/utils/util";
import { ContactType } from "@/utils/redux/Interfaces/contactType";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const [formValues, setFormValues] = useState<ContactType>({
    firstname : "",
    lastname : "",
    email : "",
    phone : "",
    company : "",
    streetaddress : "",
    city : "", 
    provincestate : "",
    postalcode : "",
    country : "",
    message : "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    // try {
    //   const res = await signin(formValues);
    //   toast.success(res.message);
    //   router.push("/admin");
    // } catch (e) {
    //   if (axios.isAxiosError(e)) {
    //     toast.error(e.response?.data.message);
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <div className=" w-[80%] mx-auto   ">
      <form className="" onSubmit={handleSubmit}>
        {/* firstname and lastname */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name *</Label>
            <Input id="firstname" name="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name *</Label>
            <Input id="lastname" name="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        {/* email and phone */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" placeholder="Tyler" type="email" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Téléphone *</Label>
            <Input id="phone" name="phone" placeholder="" type="text" />
          </LabelInputContainer>
        </div>
        {/* company */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Nom de la compagnie *</Label>
          <Input id="company" name="company" placeholder="Nom de la compagnie" type="email" />
        </LabelInputContainer>
        {/* street address */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="streetaddress">Numéro et rue</Label>
          <Input id="streetaddress" name="streetaddress" placeholder="" type="text" />
        </LabelInputContainer>
        {/* city and province / state */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="city">Ville *</Label>
            <Input id="city" placeholder="" name="city" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Province *</Label>
            <Input id="lastname" placeholder="" type="text" />
          </LabelInputContainer>
        </div>
        {/* postal and pays */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Code postal *</Label>
            <Input id="firstname" placeholder="" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Pays *</Label>
            <Input id="lastname" placeholder="" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="pb-4">
          <Label htmlFor="message">Message*</Label>
          <Textarea placeholder="Message" name="message">

          </Textarea>
          {/* <Textarea className="shadow-input rounded-xl"></Textarea> */}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br tracking-wide relative group/btn from-blueDark   to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
          type="submit"
        >
          Soumettre &rarr;
          <BottomGradient />
        </button>


       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
