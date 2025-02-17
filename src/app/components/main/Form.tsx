"use client";
import React, { useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/util";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    streetaddress: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleCaptchaChange = useCallback((token: string | null) => {
    setCaptchaToken(token);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form and captcha
    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    setIsSubmitting(true);

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const phone = formData.get("phone");
    const company = formData.get("company");

    const templateParams = {
      to_name: "ks-techonologie",
      name: `${firstname} ${lastname}`,
      from_email: email,
      from_tele: phone,
      from_company: company,
      message: message,
    };

    await emailjs
      .send(`service_kepce0w`, `template_lj3z6iq`, templateParams, {
        publicKey: "PPp09cJMr2Rxwbh38",
      })
      .then((res) => {
        if (res.text == "OK") {
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            company: "",
            streetaddress: "",
            city: "",
            province: "",
            postalCode: "",
            country: "",
            message: "",
          });
          setCaptchaToken(null);
          toast.success("votre message a été envoyé avec succès");
        } else {
          toast.error(
            "quelque chose s'est produit lorsque vous essayez d'envoyer ou vous pouvez utiliser cet email directement : info@kstechnologie.com"
          );
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-[80%] mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Prénom *</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Nom de famille *</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              placeholder="tyler@example.com"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+1 (123) 456-7890"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </div>

        {/* Company and Address Fields */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Nom de la compagnie *</Label>
          <Input
            id="company"
            name="company"
            placeholder="Votre entreprise"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>

        {/* Message Field */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>

        {/* reCAPTCHA */}
        <div className="mb-4 flex justify-start">
          <ReCAPTCHA
            sitekey="6Le_kMIqAAAAAKIdk_0nfpRwcqvd8ubArtWo5Lob"
            onChange={handleCaptchaChange}
          />
        </div>
        {/* 6Le_kMIqAAAAAC2D59Du2V68SqGBXRgfhzuNOeJF */}

        {/* Submit Button */}
        <Button
          className={cn(
            "bg-gradient-to-br tracking-wide relative group/btn from-blueDark to-neutral-600 block w-full text-white rounded-md h-10 font-medium",
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          )}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Soumettre"}
          <BottomGradient />
        </Button>
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
