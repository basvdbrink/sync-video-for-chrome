var listener = function(tabId, changeInfo, tab) {
    chrome.tabs.getSelected(null, function(tab) {
        if (tab.url.includes("sync-youtube") && changeInfo.status === 'complete') {
            getUserName();
        }
      });
}
chrome.tabs.onUpdated.addListener(listener);

function getUserName() {
    chrome.storage.sync.get('username', function(result) {
        enterUsername(result.username);
      });
}
  
function enterUsername(username) {
    if (username) {
        chrome.tabs.executeScript(
            {code: "document.getElementsByClassName('nickname-input')[0].value = \"" + username + "\";"});
    }

    chrome.tabs.executeScript(
        {code: "document.getElementsByClassName('btn-join')[0].click();"}); 
}