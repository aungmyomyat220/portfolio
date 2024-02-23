import axios from 'axios';

export const sendMailHook = async (emailData) => {
  try {
    console.log("Email Data===>", emailData);
    const response = await axios.post(`http://localhost:8000/portfolio_mailservice`, emailData, {
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': '927e0f9a-4451-4210-8dd1-eb47f8ca9089'
      }
    });

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (e) {
    console.log("Error Sending Mail", e);
  }
};
