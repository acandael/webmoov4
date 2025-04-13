import { useState } from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z
    .string()
    .min(10, "Ongeldig telefoonnummer")
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  align?: "left" | "center";
}

const ContactForm = ({ align = "left" }: ContactFormProps) => {
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
  });

  // Add debug logging
  console.log("Form state:", {
    isValid: form.formState.isValid,
    isDirty: form.formState.isDirty,
    errors: form.formState.errors,
    values: form.getValues(),
    touched: form.formState.touchedFields,
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting form with data:", data);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Er is iets misgegaan. Probeer het later opnieuw.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Er is iets misgegaan. Probeer het later opnieuw.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formSection}>
      <div
        className={`${styles.heading} ${align === "center" ? styles.centerAlign : ""}`}
      >
        <h2>Laten we het gesprek starten</h2>
        <p className={styles.subtitle}>
          Vul het formulier in en we nemen binnen 24 uur contact met u op.
        </p>
      </div>

      <form
        className={styles.contactForm}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Naam</label>
            <input
              type="text"
              id="name"
              {...form.register("name", { required: true })}
              placeholder="John Doe"
            />
            {form.formState.errors.name && (
              <span className={styles.errorMessage}>
                {form.formState.errors.name.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...form.register("email", { required: true })}
              placeholder="johndoe@gmail.com"
            />
            {form.formState.errors.email && (
              <span className={styles.errorMessage}>
                {form.formState.errors.email.message}
              </span>
            )}
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="phone">Telefoon (optioneel)</label>
            <input
              type="tel"
              id="phone"
              {...form.register("phone")}
              placeholder="0498163250"
            />
            {form.formState.errors.phone && (
              <span className={styles.errorMessage}>
                {form.formState.errors.phone.message}
              </span>
            )}
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message">Bericht</label>
            <textarea
              id="message"
              {...form.register("message", { required: true })}
              placeholder="Vertel ons over uw project..."
            />
            {form.formState.errors.message && (
              <span className={styles.errorMessage}>
                {form.formState.errors.message.message}
              </span>
            )}
          </div>
        </div>

        {submitStatus.type && (
          <div
            className={`${styles.statusMessage} ${
              submitStatus.type === "success" ? styles.success : styles.error
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          className={`${styles.button} ${align === "center" ? styles.centerAlignButton : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Versturen..." : "Verstuur bericht"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
