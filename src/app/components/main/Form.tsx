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
import form from "../../../data/formContact";
import { useAppSelector } from "@/redux/hooks";
import { LanguageEnum } from "@/redux/features/languages/language-slice";

export function ContactForm() {
  const language = useAppSelector((state) => state.language.value);
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
      toast.error(
        language === LanguageEnum.FR
          ? form.notifications.captchaError.fr
          : form.notifications.captchaError.en
      );
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
          toast.success(
            language === LanguageEnum.FR
              ? form.notifications.success.fr
              : form.notifications.success.en
          );
        } else {
          toast.error(
            language === LanguageEnum.FR
              ? form.notifications.error.fr
              : form.notifications.error.en
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
            <Label htmlFor="firstname">
              {language === LanguageEnum.FR
                ? form.personalInfo.firstName.fr
                : form.personalInfo.firstName.en}
            </Label>
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
            <Label htmlFor="lastname">
              {language === LanguageEnum.FR
                ? form.personalInfo.lastName.fr
                : form.personalInfo.lastName.en}
            </Label>
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
            <Label htmlFor="phone">
              {language === LanguageEnum.FR
                ? form.contactInfo.phone.fr
                : form.contactInfo.phone.en}
            </Label>
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
          <Label htmlFor="company">
            {language === LanguageEnum.FR
              ? form.companyInfo.companyName.fr
              : form.companyInfo.companyName.en}
          </Label>
          <Input
            id="company"
            name="company"
            placeholder={
              language === LanguageEnum.FR
                ? form.companyInfo.companyName.placeholder.fr
                : form.companyInfo.companyName.placeholder.en
            }
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
            placeholder={
              language === LanguageEnum.FR
                ? form.messageSection.message.placeholder.fr
                : form.messageSection.message.placeholder.en
            }
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
          {isSubmitting
            ? language === LanguageEnum.FR
              ? form.submitButton.submitting.fr
              : form.submitButton.submitting.en
            : language === LanguageEnum.FR
            ? form.submitButton.submit.fr
            : form.submitButton.submit.en}
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
