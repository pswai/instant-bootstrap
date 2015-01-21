chrome.runtime.onConnect.addListener(function(port) {
  if (port.name !== 'devtools') {
    return;
  }

  port.onMessage.addListener(function (msg) {
    chrome.tabs.sendMessage(msg.tabId, {
      action: 'updateCss',
      css: msg.css
    });
  });
});
