import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ArticleMeta } from "@/lib/festivals";

export interface FestivalArticle extends ArticleMeta {
  festivalSlug: string;
  content: string;
}

const festivalsDirectory = path.join(process.cwd(), "content", "festivals");

function getArticlesDirectory(festivalSlug: string): string {
  return path.join(festivalsDirectory, festivalSlug, "articles");
}

function readArticleFile(festivalSlug: string, filename: string): FestivalArticle {
  const filePath = path.join(getArticlesDirectory(festivalSlug), filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fileSlug = filename.replace(/\.mdx$/, "");

  return {
    festivalSlug,
    title: String(data.title ?? fileSlug),
    slug: String(data.slug ?? fileSlug),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    readingTime: String(data.readingTime ?? ""),
    content,
  };
}

export function getFestivalArticles(festivalSlug: string): FestivalArticle[] {
  const articlesDirectory = getArticlesDirectory(festivalSlug);

  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => readArticleFile(festivalSlug, filename))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFestivalArticle(
  festivalSlug: string,
  articleSlug: string
): FestivalArticle | undefined {
  const filename = `${articleSlug}.mdx`;
  const filePath = path.join(getArticlesDirectory(festivalSlug), filename);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const article = readArticleFile(festivalSlug, filename);
  return article.slug === articleSlug ? article : undefined;
}

export function getAllFestivalArticleParams(): {
  slug: string;
  article: string;
}[] {
  if (!fs.existsSync(festivalsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(festivalsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) =>
      getFestivalArticles(entry.name).map((article) => ({
        slug: entry.name,
        article: article.slug,
      }))
    );
}
