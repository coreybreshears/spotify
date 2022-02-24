import axios from 'axios';
import config from '../config';

export const getToken = async () => {
  try {
    var querystring = require('querystring');
    // console.log(config.clientId, config.clientSecret);
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

    const response = await axios({
      url: config.api.authUrl,
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
      },
      data: querystring.stringify({
        grant_type: 'client_credentials'
      })
    });

    return response.data.access_token;
  }
  catch {
    return null;
  }
};