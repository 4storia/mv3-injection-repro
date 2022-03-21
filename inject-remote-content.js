(function() {
    function injectScript(file) {
        var body = document.querySelector("body");
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");

        body.appendChild(script);
        script.src = file;
    }

    injectScript("https://4storia.github.io/mv3-repro/test-script.js");
})()