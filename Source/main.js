var unlinker = (function() {
    function start() {
        console.group("Unlinker");
        console.debug("Looking for links...");
        var links = document.querySelectorAll("a");
        links.forEach(function(link) {
            if (/(^|\.)forbes\.com$/.test(link.hostname)) {
                console.debug("Found one...");
                begone(link);
            }
        });
        console.groupEnd();
    }

    function replaceWithSpan(link) {
        var span = document.createElement("SPAN");
        span.innerHTML = link.innerHTML;
        link.parentElement.replaceChild(span, link);
    }

    function redactIt(link) {
        var span = document.createElement("SPAN");
        span.innerHTML = "~redacted~";
        link.parentElement.replaceChild(span, link);
    }

    function begone(link) {
        link.parentElement.removeChild(link);
    }

    return { start: start };
})();

unlinker.start();