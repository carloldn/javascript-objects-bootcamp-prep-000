var playlist = {
  Kelly: "mornings", Jenna: "nights"
};
function updatePlaylist(playlistObject, artist, title) {
  playlistObj[artist] = title;
  return playlistObject;
}
function removeFromPlaylist(playlistObject, artist) {
  delete playlistObject[artist];
  return playlistObject;}