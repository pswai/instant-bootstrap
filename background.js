var cssCaches = {};

chrome.runtime.onConnect.addListener(function(port) {
  if (port.name !== 'devtools') {
    return;
  }

  port.onMessage.addListener(function (msg) {
    cssCaches[msg.tabId] = msg.css;

    chrome.tabs.sendMessage(msg.tabId, {
      action: 'updateCss',
      css: msg.css
    });
  });
});

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request == 'refresh') {
    // Messages from content scripts should have sender.tab set
    if (sender.tab) {
      var tabId = sender.tab.id;
      if (tabId in cssCaches) {
        chrome.tabs.sendMessage(tabId, {
          action: 'updateCss',
          css: cssCaches[tabId]
        });
      }
    }
  }

  return true;
});
