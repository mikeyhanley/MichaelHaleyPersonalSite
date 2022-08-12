function pictureHandler() {
  document.getElementById("overlayContainer").style.display = "flex";;
  document.getElementById('borderForFoccussedProfilePic').style.display = 'flex'
  document.getElementById('focussedProfilePic').style.display = 'flex'


}
function clickOutHandler() {
  document.getElementById("overlayContainer").style.display = "none";;
  document.getElementById('borderForFoccussedProfilePic').style.display = 'none'
  document.getElementById('focussedProfilePic').style.display = 'none'
  document.getElementById('projectsList').style.display = 'none'



}
function projectsHandler() {
  document.getElementById("overlayContainer").style.display = "flex";;

  document.getElementById('projectsList').style.display = 'flex'
}