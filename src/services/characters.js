export async function getCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = response.json();
  return data;
}