function pictureHandler(set) {
  const overlay = document.getElementById("overlay");

  const pictureContainer = document.getElementById("profilePicContainer");

  const outerPictureContainer = document.getElementById(
    "outerProfilePicContainer"
  );

  if (set) {
    overlay.style.display = "unset";
    pictureContainer.setAttribute("class", "pictureContainerClicked");
    outerPictureContainer.setAttribute("class", "outerpicContainerClicked");
  } else {
    overlay.style.display = "none";
    pictureContainer.setAttribute("class", "profilePicContainerPostClick");
    outerPictureContainer.setAttribute("class", "outerProfilePicContainer");
    setTimeout(function () {
      pictureContainer.setAttribute("class", "profilePicContainer");
    }, 300);
  }
}
