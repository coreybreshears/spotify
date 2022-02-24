import axios from 'axios';
import config from '../config';

export const getNewReleases = async () => {
  const token = localStorage.getItem('token') || null;

  try {
    let items = [], start_index = 0;

    while (true) {
      const response = await axios({
        url: `${config.api.baseUrl}/browse/new-releases`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        params: {
          offset: start_index,
          limit: 50
        }
      });

      const new_items = await response.data.albums.items;

      if (!new_items.length)
        break;

      items.push(...new_items);
      start_index += 50;
    }

    return items;
  }
  catch {
    return null;
  }
};