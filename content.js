function removeFacebookHomepage() {
  // Only remove homepage content if we're actually on the homepage
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/home"
  ) {
    const homepageBody = document.querySelector('div[role="main"]');
    if (homepageBody) {
      homepageBody.remove();
    }
  }
}

function removeFacebookReels() {
  const reels = document.querySelectorAll('a[aria-label="reel"]');
  reels.forEach((reel) => reel.remove());
  const videos = document.querySelectorAll("video");
  videos.forEach((vid) => vid.parentNode.remove());
}

// Run initially
// removeFacebookReels();
removeFacebookHomepage();

// Run periodically in case of dynamic content loading
// setInterval(removeFacebookReels, 2000);
setInterval(removeFacebookHomepage, 500);
