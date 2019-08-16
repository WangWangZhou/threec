function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
     return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
     var url = getDomainFromUrl(tab.url).toLowerCase();
     if(url=="blog.csdn.net"){
          chrome.pageAction.show(tabId);
     }
     if(url=="mobile.51cto.com"){
          chrome.pageAction.show(tabId);
     }
}
chrome.tabs.onUpdated.addListener(checkForValidUrl);

function testBackground(){
	console.info('hello')
}
