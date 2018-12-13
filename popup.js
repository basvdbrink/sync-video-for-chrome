document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('redirect');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      redirectToUrl(tab);
    });
  }, false);
}, false);

function redirectToUrl(tab) {
  var url = tab.url;

  if (!url.includes("sync-youtube")) {
    url = url.replace("youtube", "sync-youtube");  
  }

  chrome.tabs.update({url: url, active: true});  
}
