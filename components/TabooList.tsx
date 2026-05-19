interface TabooListProps {
  taboos: string[];
}

export default function TabooList({ taboos }: TabooListProps) {
  return (
    <aside>
      <h3>Things to Avoid</h3>
      <ul>
        {taboos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}
