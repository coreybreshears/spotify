import axios from 'axios';
import config from '../config';

export const getToken = async () => {
  try {
    var querystring = require('querystring');
    
    const response = await axios({
      url: config.api.authUrl,
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${config.api.clientId}:${config.api.clientSecret}`),
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