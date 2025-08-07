// Main logic for the extension

// Identifier for the feed element.
/*
    We specifically target the main div that uses the style class
    yLugrQHpYHBvRKYnhfPdtLrTaauoPQlRnLSjiY
    from a quick inspection in the inspect tab I located the feed element and 
    figured out that's the one used.
*/
const FEED_SELECTOR = "main.yLugrQHpYHBvRKYnhfPdtLrTaauoPQlRnLSjiY";

// Style Class Injector
/* 
    hides the element selected by the FEED_SELECTOR variable.
    Uses direct CSS manipulation to add display: none to the style class that the feed
    element uses.
*/
function injectHideFeedStyle() {
  const styleElement = document.createElement("style");

  styleElement.textContent = `${FEED_SELECTOR} {
        display: none !important;
    }`;

  document.head.appendChild(styleElement);
  console.log("LinkClean: LinkedIn feed hiding style injected.");
}

// Call the function to hide the feed.
injectHideFeedStyle();
