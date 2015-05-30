/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "minify_UI")) {
        /* Call the specified callback, passing
           the web-pages DOM content as argument */

		var minimap = document.getElementById("minimap");
		var viewcard = document.getElementById("viewcard");
		var compass = document.getElementById("compass");
		var titlecard = document.getElementById("titlecard");
		var appverticalwidgetholder = document.getElementsByClassName("app-vertical-widget-holder")[0];
		var apphorizontalwidgetholder = document.getElementsByClassName("app-horizontal-widget-holder")[0];

		if(!minimap.style.display || minimap.style.display == 'block')
		{
			minimap.style.display = 'none';
			viewcard.style.display = 'none';
			compass.style.display = 'none';
			titlecard.style.display = 'none';

		    document.body.style.overflow = 'hidden';  // firefox, chrome
		    document.body.scroll = "no"; // ie only

			appverticalwidgetholder.style.visibility = 'hidden';
			apphorizontalwidgetholder.style.visibility = 'hidden';

	    	sendResponse("minified");

		} else {
			apphorizontalwidgetholder.style.visibility = 'visible';
			appverticalwidgetholder.style.visibility = 'visible';

		    document.body.style.overflow = 'auto';  // firefox, chrome
		    document.body.scroll = "yes"; // ie only

			titlecard.style.display = 'block';

			compass.style.display = 'block';
			minimap.style.display = 'block';
			viewcard.style.display = 'block';

			sendResponse("expanded");
		}

    }
});