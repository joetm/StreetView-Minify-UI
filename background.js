/* Regex-pattern to check URLs against.
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */
//var urlRegex = /^file:\/\/\/:?/;

/* A function creator for callbacks */
function showMessg(msg) {
	//console.log(msg);
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
    //if (urlRegex.test(tab.url)) {

        /* send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "minify_UI" },
                                showMessg);

    //}
});