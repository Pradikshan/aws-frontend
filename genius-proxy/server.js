import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

const accessToken =
  "QXy69DKM3oorl6z7byhUWYMUnItC2hcJFNj-8PuSBP0Q8mtA73o5ePvPYMk4UOz8";

app.get("/lyrics", async (req, res) => {
  const title = req.query.title;
  const searchUrl = `https://api.genius.com/search?q=${encodeURIComponent(
    title
  )}`;

  try {
    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const hits = response.data.response.hits;
    if (hits.length > 0) {
      const songUrl = hits[0].result.url;

      const songResponse = await axios.get(songUrl);
      const html = songResponse.data;
      const $ = cheerio.load(html);

      const lyrics =
        $("div.lyrics").text() || $('div[class*="Lyrics__Container"]').text();

      res.send(lyrics.trim() || "Lyrics not found.");
    } else {
      res.status(404).send("No results found.");
    }
  } catch (error) {
    console.error("Error fetching the lyrics:", error);
    res.status(500).send("Error fetching lyrics.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
