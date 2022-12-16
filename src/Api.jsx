import axios from 'axios'

async function MyApi() {
  try {
    const response = await axios.get('https://api.genshin.dev/characters/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default MyApi;