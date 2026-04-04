"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const projectTypes = [
  "Centre de conditionnement complet",
  "Calibreuse",
  "Mireuse",
  "Conditionnement & emballage",
  "Marquage & traçabilité",
  "Construction de bâtiment",
  "Maintenance & SAV",
  "Autre",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      "Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-[#0f2744]"
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-[#0f2744]"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]/20"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-[#0f2744]"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]/20"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-1 block text-sm font-medium text-[#0f2744]"
          >
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-1 block text-sm font-medium text-[#0f2744]"
        >
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]/20"
        >
          <option value="">Sélectionnez un type de projet</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-[#0f2744]"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 transition-colors focus:border-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]/20 resize-none"
        />
      </div>

      <Button type="submit" size="lg">
        Envoyer le message
      </Button>
    </form>
  );
}
