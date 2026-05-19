interface Festival {
  name: string;
  date: string;
  slug: string;
}

interface FestivalCalendarProps {
  festivals: Festival[];
}

export default function FestivalCalendar({ festivals }: FestivalCalendarProps) {
  return (
    <section>
      <h2>Festival Calendar</h2>
      <ul>
        {festivals.map((f) => (
          <li key={f.slug}>
            <strong>{f.name}</strong> — {f.date}
          </li>
        ))}
      </ul>
    </section>
  );
}
