(function () {
  function injectScript(file) {
    var body = document.querySelector("body");
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

    body.appendChild(script);
    script.src = file;
  }

  const file = chrome.runtime.getURL("inject-remote-content.js");
  injectScript(file);
})();
