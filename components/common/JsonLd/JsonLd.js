/** Renders a JSON-LD structured data <script> tag from a schema.org object. */
export default function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
