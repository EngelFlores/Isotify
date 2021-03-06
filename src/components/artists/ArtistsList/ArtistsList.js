import React from 'react';
import ArtistLine from '../ArtistLine/ArtistLine';
import './ArtistsList.css';

const getArtistsComponents = (artists = []) =>
  artists.map((artist) => <ArtistLine {...{ artist, key: artist.id }} />);

const ArtistsList = ({ artists }) => (
  <div className="artist-list">{getArtistsComponents(artists)}</div>
);

export default ArtistsList;
