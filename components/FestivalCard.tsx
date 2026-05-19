interface FestivalCardProps {
  title: string;
  slug: string;
  date: string;
  summary: string;
}

export default function FestivalCard({ title, slug, date, summary }: FestivalCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{summary}</p>
      <a href={`/festivals/${slug}`}>Learn more</a>
    </article>
  );
}
