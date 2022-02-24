import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import { getToken } from '../../helpers/getToken';

function CoreLayout({ children, history }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async function () {
      const spotifyToken = await getToken();

      setToken(spotifyToken);
      localStorage.setItem('token', spotifyToken);
    })();
  }, []);

  return (
    <React.Fragment>
      {token && (
        <div className="main">
          <SideBar />
          <div className="main__content">
            <Header history={history} />
            <div className="main__content__child">
              {children}
            </div>
          </div>
          <Player />
        </div>
      )}
    </React.Fragment>
  );
}

export default CoreLayout;
