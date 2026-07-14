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
 * A React component that safely injects JSON-LD structured data into the document head.
 * Use this in Next.js App Router pages, layouts, or components.
 *
 * @example
 * ```tsx
 * import JsonLd from "@/app/components/jsonld";
 *
 * export default function ArticlePage() {
 *   return (
 *     <article>
 *       <JsonLd
 *         key="article-schema"
 *         data={{
 *           "@context": "https://schema.org",
 *           "@type": "Article",
 *           "headline": "Article Title",
 *           // ... rest of schema
 *         }}
 *       />
 *       {/* article content */}
 *     </article>
 *   );
 * }
 * ```
 */
export default function JsonLd({ data, key }: JsonLdProps) {
  // Use useEffect to safely inject JSON-LD after component mounts
  // This avoids potential SSR hydration mismatches
  if (typeof window !== "undefined") {
    // Remove any existing script with this key to prevent duplicates
    if (key) {
      const existing = document.getElementById(`jsonld-${key}`);
      if (existing) {
        existing.remove();
      }
    }

    // Create new script element
    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (key) {
      script.id = `jsonld-${key}`;
    }
    script.textContent = JSON.stringify(data, null, 2); // Pretty print for readability
    document.head.appendChild(script);
  }

  // Render null as this is a pure side-effect component
  return null;
}