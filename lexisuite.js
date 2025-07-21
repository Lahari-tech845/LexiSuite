function selectMode(mode) {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("mainPanel").classList.remove("hidden");

  if (mode === "creator" || mode === "both") {
    document.getElementById("creatorTools").classList.remove("hidden");
  }
  if (mode === "reader" || mode === "both") {
    document.getElementById("readerTools").classList.remove("hidden");
  }
}
