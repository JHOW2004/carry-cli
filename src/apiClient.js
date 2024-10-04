import axios from 'axios';  // Altere o require para import

export default async function sendMessageToAPI(question) {
  try {
    const response = await axios.post('https://servidor-carry-cli.vercel.app/', {
      message: question,
    });

    return response.data.message;
  } catch (error) {
    console.error("Erro ao se comunicar com a API:", error);
    return null;
  }
}
