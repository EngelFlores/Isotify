import React from 'react';
import './buttonPlaylist.css';
import playlistImg from '../../assets/img/playlist.png';

const ButtonPlaylist = () => (
  <button className="button-playlist ">
    <img
      className="button-playlist__icon"
      alt="symbol representing playlist"
      src={playlistImg}
    />
  </button>
);

export default ButtonPlaylist;
