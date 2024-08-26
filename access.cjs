const url =
  "https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "04045b0d0bmsh67ee5f9a8b51c5ap1d9d92jsn3d70e144425f",
    "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
