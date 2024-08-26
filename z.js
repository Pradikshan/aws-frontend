import axios from "axios";
import * as cheerio from "cheerio";

// Replace 'your_access_token' with your actual Genius API access token
const accessToken =
  "PUM1_ZWO4_BzfPbanZJ9jdtRIGUVoCRjHg6l_X08nhG-aYwEU7Us2NV9Zv6VGUUr";

// Function to search for a song by title and artist
async function searchSong(query) {
  const searchUrl = `https://api.genius.com/search?q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const hits = response.data.response.hits;
    if (hits.length > 0) {
      const song = hits[0].result;
      return song.url; // Return the song's Genius URL
    } else {
      console.log("No results found.");
      return null;
    }
  } catch (error) {
    console.error("Error searching for the song:", error);
    return null;
  }
}

// Function to get lyrics (scraping from Genius page)
async function getLyrics(songUrl) {
  try {
    const response = await axios.get(songUrl);
    const html = response.data;
    const $ = cheerio.load(html);

    // Find the lyrics using the right selector
    const lyrics =
      $("div.lyrics").text() || $('div[class*="Lyrics__Container"]').text();

    if (lyrics) {
      console.log("Lyrics found:\n", lyrics.trim());
    } else {
      console.log("Could not extract lyrics.");
    }
  } catch (error) {
    console.error("Error fetching the lyrics:", error);
  }
}

// Main function to get the lyrics of a song
async function main() {
  const songQuery = "blinding lights"; // Replace with your desired song query
  const songUrl = await searchSong(songQuery);

  if (songUrl) {
    await getLyrics(songUrl);
  }
}

main();
