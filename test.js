async function getArtistsInfo(artistname) {
  const baseURL = "https://musicbrainz.org/ws/2/artist/";
  const query = `?query=${encodeURIComponent(artistname)}&fmt=json`;

  try {
    const response = await fetch(baseURL + query);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (data.artists && data.artists.length > 0) {
      const artist = data.artists[0];

      console.log(`Name: ${artist.name}`);
      console.log(`ID: ${artist.ID}`);
      console.log(`Country: ${artist.country}`);
      console.log(`Disambiguation: ${artist.disambiguation}`);
    } else {
      console.log("Error! No artists found with that name");
    }
  } catch (error) {}
}

getArtistsInfo("Radiohead");
