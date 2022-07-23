export function formattedId(id: number) {
  const idFormatted = `000${String(id)}`.slice(-3);

  return `#${idFormatted}`;
}
