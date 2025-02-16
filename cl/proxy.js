export default {
  async fetch(request) {
    const url = "https://wholesomelist.com/api/random";
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    return response;
  }
};
