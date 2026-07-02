import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
    setIsSubmitted(true);
  }

  return (
    <section className="panel">
      <h2>Contact</h2>
      <p>Questions, ideas, or recipe suggestions? Send them our way.</p>

      {isSubmitted ? (
        <p className="success-message">
          Thanks for reaching out. We'll be in touch soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required.",
                maxLength: {
                  value: 20,
                  message: "First name must be 20 characters or fewer.",
                },
              })}
            />
            {errors.firstName && (
              <span className="field-error">{errors.firstName.message}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              placeholder="Last name"
              {...register("lastName", {
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Use letters only.",
                },
              })}
            />
            {errors.lastName && (
              <span className="field-error">{errors.lastName.message}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="yourname@example.com"
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address.",
                },
              })}
            />
            {errors.email && (
              <span className="field-error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-row form-row-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us about your suggestions."
              rows="5"
              {...register("message", { required: "Message is required." })}
            />
            {errors.message && (
              <span className="field-error">{errors.message.message}</span>
            )}
          </div>

          <button className="contact-submit" type="submit">
            Send message
          </button>
        </form>
      )}
    </section>
  );
}
