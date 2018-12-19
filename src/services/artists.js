import { spotifyInstance, createHeader } from './axiosInstances';
import { getAlbumsFromArtist as getAllAlbums } from './albums';

function getTopArtists() {
  return spotifyInstance
    .get('me/top/artists', createHeader())
    .then((response) => response.data.items);
}

function getRelatedArtists(artistId) {
  return spotifyInstance
    .get(`artists/${artistId}/related-artists`, createHeader())
    .then((response) => response.data.artists);
}

function getArtist(artistId) {
  return spotifyInstance
    .get(`artists/${artistId}`, createHeader())
    .then((artist) => {
      const promises = [getAllAlbums(artistId), getRelatedArtists(artistId)];
      return Promise.all(promises).then(([albums, relatedArtists]) => {
        return {
          ...artist.data,
          albums,
          relatedArtists
        };
      });
    });
}

function getArtistsAlbums(artists) {
  return Promise.all(
    artists.map((artist) =>
      getAllAlbums(artist.id).then((albums) => ({
        ...artist,
        albums
      }))
    )
  );
}

function getArtistsWithAlbums(artists) {
  return spotifyInstance
    .get(`artists?ids=${artists}`, createHeader())
    .then((artistsResponse) => {
      return getArtistsAlbums(artistsResponse.data.artists);
    });
}

function getMultipleArtists(artistsIds) {
  return Promise.all(artistsIds.map((artistId) => getArtist(artistId)));
}

function getTopArtistsWithAlbums() {
  return getTopArtists().then((artists) => {
    return Promise.all(
      artists.map((artist) =>
        getAllAlbums(artist.id).then((albums) => ({
          ...artist,
          albums
        }))
      )
    );
  });
}

export {
  getTopArtists,
  getTopArtistsWithAlbums,
  getArtist,
  getArtistsWithAlbums,
  getMultipleArtists,
  getArtistsAlbums
};
