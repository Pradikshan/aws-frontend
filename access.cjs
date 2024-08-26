const fetch = require("node-fetch");

async function getAccessToken() {
  const clientId = "109477dcf4ec450ea9d2b704be9a80fa";
  const clientSecret = "62587695cc844317aa6f63ac494a750c";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  console.log("Access Token:", data.access_token);
  return data.access_token;
}

getAccessToken().then((token) => {
  console.log(token);
});
