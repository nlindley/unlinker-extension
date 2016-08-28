var unlinker = (function() {
    function start() {
        console.group("Unlinker");
        console.debug("Looking for links...");
        var links = document.querySelectorAll("a");
        links.forEach(function(link) {
            if (link.href.startsWith("http://www.forbes.com")) {
                console.debug("Found one...");
                redactIt(link);
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

    return { start: start };
})();

unlinker.start();