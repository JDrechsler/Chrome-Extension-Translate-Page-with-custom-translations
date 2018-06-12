// chrome definition files through npm install @types/chrome (do not use global, use user dir)
// this is the background code...
// listen for our browerAction to be clicked
// @ts-check

chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('tab clicked');
	// for the current tab, inject the "inject.js" file & execute it
	if (tab.id !== undefined) {
		chrome.tabs.executeScript(tab.id, {
			file: './translatePage.js'
		});
	}
});
