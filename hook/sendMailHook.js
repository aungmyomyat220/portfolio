import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const sendMailHook = async (emailData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/portfolio_mailservice`, emailData, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
        'API_KEY': apiKey
      },
    });

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (e) {
    console.log("Error Sending Mail", e);
  }
};
