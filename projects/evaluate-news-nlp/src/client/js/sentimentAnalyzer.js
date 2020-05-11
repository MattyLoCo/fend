async function getSentiment(url = "", text = "") {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(text),
  });

  try {
    const sentiment = await response.json();
    return sentiment;
  } catch (error) {
    console.log(error);
  }
}

export { getSentiment };
