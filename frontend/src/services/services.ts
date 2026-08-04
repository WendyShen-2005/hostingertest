import axios from "axios";

const urlStart = import.meta.env.VITE_URL_START;

const query = `
query {
  getRandomPage {
    name,
    content,
    partner {
      name
    }
  }
}
`;

export async function getRandomPage() {
  const res = await axios.post(
    urlStart,
    {
      query
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return res.data.data.getRandomPage;
}