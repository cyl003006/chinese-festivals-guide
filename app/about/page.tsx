export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1208] px-4 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="cn"
            style={{ fontSize: 40, color: "#C41E3A", lineHeight: 1, marginBottom: 8 }}
          >
            关于我们
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 34,
              color: "#FAF6EF",
              lineHeight: 1.2,
            }}
          >
            About Chinese Festivals Guide
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              marginTop: 8,
            }}
          >
            Bridging cultures through the beauty of Chinese traditions
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-16">
        {/* Our Mission */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              fontWeight: 700,
              color: "#1a1208",
              marginBottom: 12,
            }}
          >
            Our Mission
          </h2>
          <div style={{ width: 40, height: "0.5px", background: "#e0d5c0", marginBottom: 16 }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: "#1a1208",
            }}
          >
            Chinese Festivals Guide was created with a simple goal: to make
            Chinese culture accessible and understandable for English-speaking
            foreigners. China&apos;s rich tapestry of festivals, customs, and
            traditions can feel overwhelming to an outsider — our mission is to
            bridge that gap.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: "#1a1208",
              marginTop: 16,
            }}
          >
            Every article on this site explains traditions from the ground up,
            assuming no prior cultural knowledge. Whether you&apos;re a traveler
            planning your trip, a student of Chinese culture, or simply curious
            about the world, we want you to walk away with genuine understanding
            — not just facts, but context and meaning.
          </p>
        </section>

        {/* How We Research */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              fontWeight: 700,
              color: "#1a1208",
              marginBottom: 12,
            }}
          >
            How We Research
          </h2>
          <div style={{ width: 40, height: "0.5px", background: "#e0d5c0", marginBottom: 16 }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: "#1a1208",
            }}
          >
            Our content is written by someone with deep knowledge of Chinese
            culture, drawing from firsthand experience living in China and
            participating in these traditions. Every article is cross-referenced
            with historical sources, academic writings, and regional customs to
            ensure accuracy.
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: "#1a1208",
              marginTop: 16,
            }}
          >
            We prioritize practical, real-world information — the kind that
            helps you navigate actual celebrations with confidence. This means
            covering not just the what and when, but the how and why: what to
            say, what to wear, what to bring, and what to avoid.
          </p>
        </section>

        {/* Get in Touch */}
        <section>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              fontWeight: 700,
              color: "#1a1208",
              marginBottom: 12,
            }}
          >
            Get in Touch
          </h2>
          <div style={{ width: 40, height: "0.5px", background: "#e0d5c0", marginBottom: 16 }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 17,
              lineHeight: 1.8,
              color: "#1a1208",
            }}
          >
            Have a question, suggestion, or correction? We&apos;d love to hear
            from you. Reach out to us at:
          </p>
          <a
            href="mailto:hello@chinesefestivalsguide.com"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 17,
              color: "#C41E3A",
            }}
            className="inline-block mt-1 hover:underline"
          >
            hello@chinesefestivalsguide.com
          </a>
        </section>
      </div>
    </>
  );
}
