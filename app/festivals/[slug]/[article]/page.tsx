import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  getAllFestivalArticleParams,
  getFestivalArticle,
  getFestivalArticles,
} from "@/lib/articles";
import { getFestival } from "@/lib/festivals";

interface Props {
  params: { slug: string; article: string };
}

export function generateStaticParams() {
  return getAllFestivalArticleParams();
}

export default function FestivalArticlePage({ params }: Props) {
  const festival = getFestival(params.slug);
  const article = getFestivalArticle(params.slug, params.article);

  if (!festival || !article) {
    notFound();
  }

  const moreArticles = getFestivalArticles(festival.slug)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-[#1a1208] px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.42)",
            }}
          >
            <Link href="/" className="hover:text-[#FAF6EF] transition-colors">
              Home
            </Link>
            <span>&rarr;</span>
            <Link
              href="/festivals"
              className="hover:text-[#FAF6EF] transition-colors"
            >
              Festivals
            </Link>
            <span>&rarr;</span>
            <Link
              href={`/festivals/${festival.slug}`}
              className="hover:text-[#FAF6EF] transition-colors"
            >
              {festival.title}
            </Link>
            <span>&rarr;</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>
              {article.title}
            </span>
          </nav>

          <p
            className="cn"
            style={{
              fontSize: 48,
              color: "#C41E3A",
              marginTop: 28,
              lineHeight: 1,
            }}
          >
            {festival.chineseName}
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
            {article.date} &middot; {article.readingTime}
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 40,
              color: "#FAF6EF",
              lineHeight: 1.16,
              marginTop: 10,
              maxWidth: 760,
            }}
          >
            {article.title}
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.62)",
              marginTop: 16,
              maxWidth: 700,
            }}
          >
            {article.description}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="article-content content-section">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>

      {moreArticles.length > 0 && (
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
              More articles about {festival.title}
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
              {moreArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/festivals/${festival.slug}/${item.slug}`}
                  className="group block bg-white p-5 transition-colors hover:bg-[#FAF6EF]"
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
                    {item.date} &middot; {item.readingTime}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      color: "#1a1208",
                      lineHeight: 1.35,
                      marginTop: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 14,
                      color: "#1a1208",
                      lineHeight: 1.55,
                      marginTop: 10,
                    }}
                  >
                    {item.description}
                  </p>
                  <p
                    className="group-hover:opacity-70"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: 13,
                      color: "#C41E3A",
                      textAlign: "right",
                      marginTop: 14,
                    }}
                  >
                    Read article &rarr;
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
