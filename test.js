// async function getArtistsInfo(artistname) {
//   const baseURL = "https://musicbrainz.org/ws/2/artist/";
//   const query = `?query=${encodeURIComponent(artistname)}&fmt=json`;

//   try {
//     const response = await fetch(baseURL + query);

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const data = await response.json();

//     if (data.artists && data.artists.length > 0) {
//       const artist = data.artists[0];

//       console.log(`Name: ${artist.name}`);
//       console.log(`ID: ${artist.ID}`);
//       console.log(`Country: ${artist.country}`);
//       console.log(`Disambiguation: ${artist.disambiguation}`);
//     } else {
//       console.log("Error! No artists found with that name");
//     }
//   } catch (error) {}
// }

// getArtistsInfo("Radiohead");

// Replace with your access token
const accessToken = "YOUR_SPOTIFY_ACCESS_TOKEN";

// Function to retrieve album information
async function getAlbumInfo(albumId) {
  const url = `https://api.spotify.com/v1/albums/${albumId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const albumData = await response.json();

    // Log album information
    console.log("Album Name:", albumData.name);
    console.log("Release Date:", albumData.release_date);
    console.log("Total Tracks:", albumData.total_tracks);
    console.log("Album Cover:", albumData.images[0].url); // URL to the largest album cover image

    return albumData;
  } catch (error) {
    console.error("Error fetching album info:", error);
  }
}

// Example: Replace with a valid album ID
const albumId = "1ATL5GLyefJaxhQzSPVrLX"; // Example album ID

// Retrieve album info
getAlbumInfo(albumId);
