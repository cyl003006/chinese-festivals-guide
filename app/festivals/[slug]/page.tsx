import Link from "next/link";
import { notFound } from "next/navigation";
import { getFestival, getRelatedFestivals, sections } from "@/lib/festivals";

interface Props {
  params: { slug: string };
}

export default function FestivalDetailPage({ params }: Props) {
  const festival = getFestival(params.slug);

  if (!festival) {
    notFound();
  }

  const related = getRelatedFestivals(festival.relatedSlugs);

  return (
    <>
      {/* Hero — dark background */}
      <section className="bg-[#1a1208] px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/festivals"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
            className="hover:text-[#FAF6EF] transition-colors"
          >
            &larr; Back to Festivals
          </Link>

          {/* Chinese name — large */}
          <p
            className="cn"
            style={{ fontSize: 80, color: "#C41E3A", marginTop: 16, lineHeight: 1, marginBottom: 4 }}
          >
            {festival.chineseName}
          </p>

          {/* Pinyin */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            {festival.pinyin}
          </p>

          {/* English title */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 34,
              color: "#FAF6EF",
              marginTop: 8,
              lineHeight: 1.2,
            }}
          >
            {festival.title}
          </h1>

          {/* Date / duration pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[festival.date2026, festival.duration].map((item) => (
              <span
                key={item}
                className="px-4 py-1"
                style={{
                  border: "0.5px solid rgba(255,255,255,0.2)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Facts bar */}
      <div className="bg-[#F0E8D8] px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "Also known as", value: festival.alsoKnownAs },
            { label: "Observed in", value: festival.observedIn },
            { label: "2026 Date", value: festival.date2026 },
            { label: "Key Symbols", value: festival.keySymbols },
          ].map((item, i) => (
            <div
              key={item.label}
              className="p-5"
              style={
                i < 3
                  ? { borderRight: "0.5px solid rgba(0,0,0,0.08)" }
                  : undefined
              }
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 10,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#8a6a3a",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 14,
                  color: "#1a1208",
                  marginTop: 4,
                  lineHeight: 1.4,
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content area — two columns */}
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 flex flex-col md:flex-row gap-10">
        {/* Sticky side nav */}
        <nav className="md:w-[180px] flex-shrink-0">
          <div className="md:sticky md:top-8">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#8a6a3a",
                marginBottom: 12,
              }}
            >
              On this page
            </p>
            <ul className="space-y-0.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block py-1 transition-colors hover:text-[#C41E3A]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13,
                      color: "#1a1208",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Overview & History */}
          <section id="overview" className="content-section mb-14 scroll-mt-16">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#1a1208",
                marginBottom: 16,
              }}
            >
              Overview &amp; History
            </h2>
            {festival.sections.overview.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#1a1208",
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}
          </section>

          {/* Traditions & Customs */}
          <section id="traditions" className="mb-14 scroll-mt-16">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#1a1208",
                marginBottom: 16,
              }}
            >
              Traditions &amp; Customs
            </h2>
            {festival.sections.traditions.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#1a1208",
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}
          </section>

          {/* Traditional Food */}
          <section id="food" className="mb-14 scroll-mt-16">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#1a1208",
                marginBottom: 16,
              }}
            >
              Traditional Food
            </h2>
            {festival.sections.food.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#1a1208",
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}
          </section>

          {/* Do's and Don'ts */}
          <section id="dos-and-donts" className="mb-14 scroll-mt-16">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#1a1208",
                marginBottom: 16,
              }}
            >
              Do&apos;s and Don&apos;ts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: 15,
                    color: "#1a1208",
                    marginBottom: 10,
                  }}
                >
                  &#10003; Do
                </p>
                <ul className="space-y-3">
                  {festival.sections.dosAndDonts.do.map((item, i) => (
                    <li key={i} className="flex gap-2" style={{ fontSize: 15, lineHeight: 1.6 }}>
                      <span style={{ color: "#C41E3A", flexShrink: 0, marginTop: 1 }}>
                        &#10003;
                      </span>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#1a1208",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: 15,
                    color: "#1a1208",
                    marginBottom: 10,
                  }}
                >
                  &#10007; Don&apos;t
                </p>
                <ul className="space-y-3">
                  {festival.sections.dosAndDonts.dont.map((item, i) => (
                    <li key={i} className="flex gap-2" style={{ fontSize: 15, lineHeight: 1.6 }}>
                      <span style={{ color: "#8a6a3a", flexShrink: 0, marginTop: 1 }}>
                        &#10007;
                      </span>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#1a1208",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Gift Guide */}
          <section id="gift-guide" className="mb-10 scroll-mt-16">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: "#1a1208",
                marginBottom: 16,
              }}
            >
              Gift Guide
            </h2>
            {festival.sections.giftGuide.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#1a1208",
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}
          </section>
        </div>
      </div>

      {/* Related Festivals */}
      {related.length > 0 && (
        <section className="bg-[#F0E8D8] px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                color: "#1a1208",
                marginBottom: 20,
              }}
            >
              Related Festivals
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "#e0d5c0",
              }}
              className="max-md:grid-cols-1 max-lg:grid-cols-2"
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/festivals/${r.slug}`}
                  className="block p-5 bg-white hover:bg-[#FAF6EF] transition-colors"
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: "#1a1208",
                    }}
                  >
                    {r.title}
                  </p>
                  <p className="cn" style={{ fontSize: 14, color: "#C41E3A", marginTop: 2 }}>
                    {r.chineseName}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: 13,
                      color: "#8a6a3a",
                      marginTop: 4,
                    }}
                  >
                    {r.date2026}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
