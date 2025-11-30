import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as styles } from './ecommerce-website.d283ab84_CTLEKvNp.mjs';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(10, "Ongeldig telefoonnummer").optional().or(z.literal("")),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten")
});
const ContactForm = ({ align = "left", product }) => {
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    mode: "onChange"
  });
  const onSubmit = async (data) => {
    console.log("Submitting form with data:", data);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          subject: product ? `Nieuwe aanvraag voor ${product === "one-pager-website" ? "One Pager Website" : product === "premium-website" ? "Premium Website" : "Ecommerce Website"}` : "Nieuwe contactformulier aanvraag"
        })
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op."
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Er is iets misgegaan. Probeer het later opnieuw."
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Er is iets misgegaan. Probeer het later opnieuw."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: styles.formSection, children: [
    /* @__PURE__ */ jsxs("div", { className: `${styles.heading} ${align === "center" ? styles.centerAlign : ""}`, children: [
      /* @__PURE__ */ jsx("h2", { children: "Laten we het gesprek starten" }),
      /* @__PURE__ */ jsx("p", { className: styles.subtitle, children: "Vul het formulier in en we nemen binnen 24 uur contact met u op." })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: styles.contactForm, onSubmit: form.handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsxs("div", { className: styles.formGrid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Naam" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "name",
              ...form.register("name", { required: true }),
              placeholder: "John Doe"
            }
          ),
          form.formState.errors.name && /* @__PURE__ */ jsx("span", { className: styles.errorMessage, children: form.formState.errors.name.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.formGroup, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              ...form.register("email", { required: true }),
              placeholder: "johndoe@gmail.com"
            }
          ),
          form.formState.errors.email && /* @__PURE__ */ jsx("span", { className: styles.errorMessage, children: form.formState.errors.email.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `${styles.formGroup} ${styles.fullWidth}`, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Telefoon (optioneel)" }),
          /* @__PURE__ */ jsx("input", { type: "tel", id: "phone", ...form.register("phone"), placeholder: "0498163250" }),
          form.formState.errors.phone && /* @__PURE__ */ jsx("span", { className: styles.errorMessage, children: form.formState.errors.phone.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `${styles.formGroup} ${styles.fullWidth}`, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", children: "Bericht" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              ...form.register("message", { required: true }),
              placeholder: "Vertel ons over uw project..."
            }
          ),
          form.formState.errors.message && /* @__PURE__ */ jsx("span", { className: styles.errorMessage, children: form.formState.errors.message.message })
        ] })
      ] }),
      submitStatus.type && /* @__PURE__ */ jsx(
        "div",
        {
          className: `${styles.statusMessage} ${submitStatus.type === "success" ? styles.success : styles.error}`,
          children: submitStatus.message
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: `${styles.button} ${align === "center" ? styles.centerAlignButton : ""}`,
          disabled: isSubmitting,
          children: isSubmitting ? "Versturen..." : "Verstuur bericht"
        }
      )
    ] })
  ] });
};

export { ContactForm as C };
