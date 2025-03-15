const form = {
  personalInfo: {
    firstName: {
      fr: "Prénom *",
      en: "First Name *",
      placeholder: {
        fr: "Tyler",
        en: "Tyler",
      },
    },
    lastName: {
      fr: "Nom de famille *",
      en: "Last Name *",
      placeholder: {
        fr: "Durden",
        en: "Durden",
      },
    },
  },
  contactInfo: {
    email: {
      fr: "Email *",
      en: "Email *",
      placeholder: {
        fr: "tyler@example.com",
        en: "tyler@example.com",
      },
    },
    phone: {
      fr: "Téléphone *",
      en: "Phone *",
      placeholder: {
        fr: "+1 (123) 456-7890",
        en: "+1 (123) 456-7890",
      },
    },
  },
  companyInfo: {
    companyName: {
      fr: "Nom de la compagnie *",
      en: "Company Name *",
      placeholder: {
        fr: "Votre entreprise",
        en: "Your company",
      },
    },
  },
  messageSection: {
    message: {
      fr: "Message *",
      en: "Message *",
      placeholder: {
        fr: "Votre message",
        en: "Your message",
      },
    },
  },
  submitButton: {
    submit: {
      fr: "Soumettre",
      en: "Submit",
    },
    submitting: {
      fr: "Envoi en cours...",
      en: "Sending...",
    },
  },
  notifications: {
    success: {
      fr: "votre message a été envoyé avec succès",
      en: "your message has been sent successfully",
    },
    error: {
      fr: "quelque chose s'est produit lorsque vous essayez d'envoyer ou vous pouvez utiliser cet email directement : info@kstechnologie.com",
      en: "something happened when trying to send or you can use this email directly: info@kstechnologie.com",
    },
    captchaError: {
      fr: "Veuillez compléter le reCAPTCHA",
      en: "Please complete the reCAPTCHA",
    },
  },
};

export default form;