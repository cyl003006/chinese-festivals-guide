interface QuickFactsBoxProps {
  facts: { label: string; value: string }[];
}

export default function QuickFactsBox({ facts }: QuickFactsBoxProps) {
  return (
    <aside>
      <h3>Quick Facts</h3>
      <dl>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
