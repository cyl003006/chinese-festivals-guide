"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllFestivals } from "@/lib/festivals";

const all = getAllFestivals();
const categories = ["All", "Traditional", "Folk", "Modern"];

export default function FestivalsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? all
      : all.filter((f) => f.category === activeCategory);

  return (
    <main>
      {/* Header */}
      <section className="bg-[#1a1208] px-4 py-14">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="cn"
            style={{ fontSize: 40, color: "#C41E3A", lineHeight: 1, marginBottom: 8 }}
          >
            传统节日
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 34,
              color: "#FAF6EF",
              lineHeight: 1.2,
            }}
          >
            Chinese Festivals &amp; Traditions
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              marginTop: 8,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Explore the full calendar of Chinese festivals — from ancient
            traditions rooted in folklore to modern celebrations observed by
            millions around the world.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-1.5 transition-colors"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                letterSpacing: "0.04em",
                background: activeCategory === cat ? "#C41E3A" : "transparent",
                color: activeCategory === cat ? "#FAF6EF" : "#1a1208",
                border: activeCategory === cat ? "none" : "0.5px solid #e0d5c0",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid — same hairline style as homepage */}
        {filtered.length === 0 ? (
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 15,
              color: "#8a6a3a",
              textAlign: "center",
              padding: "48px 0",
            }}
          >
            No festivals found in this category.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "#e0d5c0",
            }}
            className="max-md:grid-cols-1 max-lg:grid-cols-2"
          >
            {filtered.map((f, i) => (
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
        )}
      </div>
    </main>
  );
}
