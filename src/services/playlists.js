import { spotifyInstance, createHeader } from './axiosInstances';

function getPlaylists() {
  return spotifyInstance
    .get('me/playlists', createHeader())
    .then((response) => response.data.items);
}

function getPlaylist(playlistId) {
  return spotifyInstance
    .get(`playlists/${playlistId}`, createHeader())
    .then((response) => response.data);
}

function getFollowers(playlists) {
  return Promise.all(
    playlists.map((playlist) => {
      return getPlaylist(playlist.id).then(({ followers }) => ({
        ...playlist,
        followers
      }));
    })
  );
}

function getGlobalTopTracks() {
  return getPlaylist('37i9dQZEVXbMDoHDwVN2tF');
}

export { getPlaylists, getPlaylist, getGlobalTopTracks, getFollowers };
