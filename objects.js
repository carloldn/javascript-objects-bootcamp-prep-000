var playlist = {
  Kelly: "mornings", Jenna: "nights"
};
function updatePlaylist (playlist, artistname, songtitle){
return playlist.assign ( {},playlist,{ [artistname]:songtitle)})}
function removeFromPlaylistplaylist, artistName){
  delete playlist[artistName]
  return playlist
} 
