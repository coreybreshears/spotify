import axios from 'axios';
import config from '../config';

export const getFeaturedPlaylist = async () => {
  const token = localStorage.getItem('token') || null;

  try {
    const response = await axios({
        url: `${config.api.baseUrl}/browse/featured-playlists`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data.playlists.items;
  }
  catch {
    return null;
  }
};