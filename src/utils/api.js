import axios from 'axios';

const API_URL = 'https://rukvvx2s39.execute-api.us-east-1.amazonaws.com/dev/contact';

class Api {
  post = (body, url = API_URL) => new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, body);
      resolve(response.data);
    } catch (error) {
      reject(new Error(error));
    }
  });
}

export default new Api();
