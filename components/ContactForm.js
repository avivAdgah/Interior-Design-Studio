"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "New Home",
  "Renovation",
  "Interior Design",
  "Commercial",
  "3D Visualization",
  "Other",
];

const BUDGETS = [
  "Under £50,000",
  "£50,000 – £150,000",
  "£150,000 – £350,000",
  "£350,000+",
  "Not sure yet",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  budget: "",
  message: "",
};

function fieldClasses(hasError) {
  return `w-full bg-transparent border px-4 py-3.5 font-sans text-sm text-ink placeholder:text-stone/60 transition-colors focus:outline-none ${
    hasError ? "border-red-600" : "border-ink/20 focus:border-ink"
  }`;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.projectType) {
      nextErrors.projectType = "Please select a project type.";
    }
    if (!values.message.trim()) {
      nextErrors.message = "Please tell us about your project.";
    }
    return nextErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-ink/10 bg-charcoal text-cream px-8 py-16 flex flex-col items-center text-center gap-4"
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase text-bronze">
          Inquiry Received
        </span>
        <h2 className="font-display text-2xl md:text-3xl">
          Thank you. Your inquiry has been received.
        </h2>
        <p className="font-sans text-sm text-cream/60 max-w-md">
          A member of the Northline team will be in touch shortly to discuss
          your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-sans text-sm text-ink">
            Full Name <span className="text-bronze-deep">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClasses(errors.name)}
          />
          {errors.name ? (
            <p id="name-error" className="font-sans text-xs text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-sans text-sm text-ink">
            Email <span className="text-bronze-deep">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClasses(errors.email)}
          />
          {errors.email ? (
            <p id="email-error" className="font-sans text-xs text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-sans text-sm text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            className={fieldClasses(false)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="font-sans text-sm text-ink">
            Project Type <span className="text-bronze-deep">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={handleChange("projectType")}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "projectType-error" : undefined
            }
            className={fieldClasses(errors.projectType)}
          >
            <option value="">Select an option</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id="projectType-error" className="font-sans text-xs text-red-700">
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="font-sans text-sm text-ink">
            Project Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={handleChange("location")}
            className={fieldClasses(false)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="font-sans text-sm text-ink">
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={handleChange("budget")}
            className={fieldClasses(false)}
          >
            <option value="">Select an option</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-sans text-sm text-ink">
          Tell Us About Your Project <span className="text-bronze-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClasses(errors.message)}
        />
        {errors.message ? (
          <p id="message-error" className="font-sans text-xs text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300 min-h-11 bg-ink text-cream border border-ink hover:bg-transparent hover:text-ink w-fit"
      >
        Send Inquiry
      </button>
    </form>
  );
}
