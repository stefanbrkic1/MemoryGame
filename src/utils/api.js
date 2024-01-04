export default async function fetchData() {
  try {
    // Use Promise.all to wait for both fetch operations to complete
    const [page1, page2] = await Promise.all([
      fetchFirstPage(),
      fetchSecondPage(),
    ]);

    // Merge the data from both pages
    const mergedData = [...page1, ...page2];

    return mergedData;
  } catch (error) {
    // Handle errors if any of the fetch operations fail
    console.error('Error fetching data:', error);
    throw error; // You can choose to handle or propagate the error as needed
  }
}

async function fetchFirstPage() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character', {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Coordinates API response was not ok');
    }

    const data = await response.json();

    //Remove invalid API property
    data.results.splice(18, 1);
    data.results.splice(12, 1);
    data.results.splice(5, 1);
    //Add isClicked property
    const charactersData = data.results.map((character) => ({
      ...character,
      isClicked: false,
    }));

    return charactersData;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

async function fetchSecondPage() {
  try {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/?page=2',
      {
        mode: 'cors',
      },
    );

    if (!response.ok) {
      throw new Error('Coordinates API response was not ok');
    }

    const data = await response.json();

    //Remove invalid API property
    data.results.splice(16, 1);
    data.results.splice(13, 1);

    //Add isClicked property
    const charactersData = data.results.map((character) => ({
      ...character,
      isClicked: false,
    }));

    return charactersData;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}
