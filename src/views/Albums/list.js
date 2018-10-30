import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SideBar from '../../components/Sidebar/sidebar';

export default () => {
  return (
    <Fragment>
      <SideBar />
      <div className="container">
        <h1>ALBUMS</h1>
        <Link to="/artists">Artists</Link>
      </div>
    </Fragment>
  );
};
