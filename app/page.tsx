import Link from "next/link";
import { festivals } from "@/lib/festivals";

const sorted = [...festivals].sort(
  (a, b) => new Date(a.date2026).getTime() - new Date(b.date2026).getTime()
);

const nextThree = sorted.slice(0, 3);

const gridFestivals = sorted;

const features = [
  {
    icon: "📖",
    title: "Written for Non-Chinese Readers",
    description:
      "No assumed cultural knowledge, everything explained from scratch",
  },
  {
    icon: "✅",
    title: "Practical Tips Included",
    description: "What to say, what to give, and what NOT to do",
  },
  {
    icon: "🏛️",
    title: "Deep Cultural Context",
    description: "History and meaning behind every tradition",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — two-column grid */}
      <section className="bg-[#FAF6EF] px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left column */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: 15,
                color: "#8a6a3a",
                letterSpacing: "0.04em",
              }}
            >
              A cultural guide for curious minds
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1.2,
                color: "#1a1208",
                marginTop: 8,
              }}
            >
              Chinese Festivals
              <br />
              &amp; Traditions
            </h1>
            <p
              className="cn"
              style={{ fontSize: 56, color: "#C41E3A", marginTop: 4, lineHeight: 1 }}
            >
              中国节日
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: 17,
                color: "#1a1208",
                marginTop: 16,
                maxWidth: 400,
                lineHeight: 1.7,
              }}
            >
              Discover the meaning, traditions, and stories behind China&apos;s
              most celebrated events.
            </p>
            <Link
              href="/festivals"
              className="inline-block mt-8 px-8 py-3 text-sm"
              style={{
                background: "#C41E3A",
                color: "#FAF6EF",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 15,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Explore Festivals &rarr;
            </Link>
          </div>

          {/* Right column — stacked cards */}
          <div className="flex flex-col gap-4">
            {/* Top card — next festival */}
            <Link
              href={`/festivals/${nextThree[0].slug}`}
              className="block p-6"
              style={{ background: "#1a1208" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Next Festival
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  color: "#FAF6EF",
                  marginTop: 4,
                }}
              >
                {nextThree[0].title}
              </p>
              <p className="cn" style={{ fontSize: 16, color: "#C41E3A", marginTop: 2 }}>
                {nextThree[0].chineseName}
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 6,
                }}
              >
                {nextThree[0].date2026}
              </p>
            </Link>

            {/* Two smaller cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nextThree.slice(1).map((f) => (
                <Link
                  key={f.slug}
                  href={`/festivals/${f.slug}`}
                  className="block p-5"
                  style={{ background: "#F0E8D8" }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: "#1a1208",
                    }}
                  >
                    {f.title}
                  </p>
                  <p className="cn" style={{ fontSize: 14, color: "#C41E3A", marginTop: 1 }}>
                    {f.chineseName}
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
                    {f.date2026}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Festivals Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-10">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                color: "#1a1208",
              }}
            >
              Featured Festivals
            </h2>
            <p className="cn" style={{ fontSize: 18, color: "#C41E3A", marginTop: 2 }}>
              传统节日
            </p>
            <div
              style={{ width: 60, height: "0.5px", background: "#e0d5c0", marginTop: 10 }}
            />
          </div>

          {/* Hairline grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "#e0d5c0",
            }}
            className="max-md:grid-cols-1 max-lg:grid-cols-2"
          >
            {gridFestivals.map((f, i) => (
              <Link
                key={f.slug}
                href={`/festivals/${f.slug}`}
                className="group block p-[22px] bg-white hover:bg-[#FAF6EF] transition-colors"
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: 12,
                    color: "#8a6a3a",
                    letterSpacing: "0.02em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} &middot; {f.category}
                </p>
                <p
                  className="cn"
                  style={{
                    fontSize: 30,
                    color: "#C41E3A",
                    marginTop: 8,
                    lineHeight: 1.1,
                  }}
                >
                  {f.chineseName}
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 14,
                    color: "#1a1208",
                    marginTop: 4,
                  }}
                >
                  {f.title}
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
                  {f.date2026}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    color: "#1a1208",
                    marginTop: 8,
                    lineHeight: 1.5,
                  }}
                >
                  {f.description}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: 13,
                    color: "#C41E3A",
                    textAlign: "right",
                    marginTop: 12,
                  }}
                  className="group-hover:opacity-70"
                >
                  Read more &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Guide */}
      <section className="bg-[#1a1208] px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feat) => (
            <div key={feat.title}>
              <p style={{ fontSize: 24, marginBottom: 10 }}>{feat.icon}</p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  color: "#FAF6EF",
                  fontWeight: 500,
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  marginTop: 6,
                }}
              >
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Festivals Strip */}
      <section className="bg-[#F0E8D8] px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              color: "#1a1208",
              marginBottom: 16,
            }}
          >
            Upcoming Festivals in 2026
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x" style={{ scrollbarWidth: "thin" }}>
            {sorted.map((f) => (
              <Link
                key={f.slug}
                href={`/festivals/${f.slug}`}
                className="snap-start flex-shrink-0 px-5 py-2 whitespace-nowrap hover:bg-[#C41E3A] hover:text-[#FAF6EF] transition-colors"
                style={{
                  border: "0.5px solid #C41E3A",
                  color: "#C41E3A",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 14,
                }}
              >
                {f.title} &mdash; {f.date2026}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
