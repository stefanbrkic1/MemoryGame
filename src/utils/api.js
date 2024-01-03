export default async function fetchData() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character', {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Coordinates API response was not ok');
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
