Repro for a potential bug? in the implementation of manifest v3 and how it handles remote code loading.

This is a bare-bones manifest v3 setup, which will inject a remote script onto any given url.

The remote script in question can be found here: https://4storia.github.io/mv3-repro/test-script.js
The script will add `window.SHOULD_THIS_HAPPEN = "I don't think so?";` to the top-level content window (aka not in the extension sandbox), as well as trigger an alert.

The specific gap seems to be centered around where remote content is loaded. If the content script directly tries to load a remote js file, it will run into CSP errors (which I assume is how mv3 prevents remote code from being executed). HOWEVER, if the content script loads a trust chrome extension file, which in *turn* adds a remote js file to the page, this js is added an executed without error. I assume this is a gap in how CSP exceptions are applied to injected content? But perhaps this is intended behavior, although that would seem odd to me.