var playlist = {
  Kelly: "mornings", Jenna: "nights"
};
function updatePlaylist [playlist, artistname, songtitle]{ 
return playlist.assign ( {},playlist, {[artistname]:songtitle)
removeFromPlaylist (playlist, artistName);
  delete playlist [artistName];
  return updatedPlaylist;