// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('tab clicked');
	// for the current tab, inject the "inject.js" file & execute it
	if (tab.id !== undefined) {
		chrome.tabs.executeScript(tab.id, {
			file: './translatePage.js'
		});
	}
});
