import { type ReactNode } from "react";

interface JsonLdProps {
  /**
   * The JSON-LD object to serialize
   */
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * Optional key to prevent duplicate injection of the same schema
   */
  key?: string;
}

/**
 * Injects JSON-LD structured data into the document head as a side-effect.
 */
export default function JsonLd({ data, key }: JsonLdProps) {
  if (typeof window !== "undefined") {
    if (key) {
      const existing = document.getElementById(`jsonld-${key}`);
      if (existing) {
        existing.remove();
      }
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (key) {
      script.id = `jsonld-${key}`;
    }
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
  }

  return null;
}
