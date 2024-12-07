export default function Data({ character }) {
  if (!character || !character.results || character.results.length === 0) {
    return <p>No character found.</p>;
  }

  const { name, species, status } = character.results[0];

  return (
    <section>
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
    </section>
  );
}
