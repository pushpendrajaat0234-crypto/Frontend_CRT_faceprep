document.addEventListener("DOMContentLoaded", () => {
  // Navigate from Home cards to the Playlist page
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const playlistId = card.getAttribute("data-playlist");
      window.location.href = `playlist.html?playlist=${playlistId}`;
    });
  });

  // Track row play interaction on playlist page
  const rows = document.querySelectorAll(".track-row");
  rows.forEach(row => {
    row.addEventListener("click", () => {
      rows.forEach(r => r.style.background = "transparent");
      row.style.background = "rgba(255, 255, 255, 0.2)";
    });
  });
});