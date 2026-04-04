"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: { question: string; answer: string }[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 cursor-pointer"
          >
            <span className="text-base font-semibold text-[#0f2744]">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-[#e8772e] transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 leading-relaxed text-gray-600">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
