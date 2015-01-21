function getStyleTag() {
  var styleTag = document.getElementById('ibs-style');

  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'ibs-style';
    styleTag.setAttribute('type', 'text/css');

    document.getElementsByTagName('head')[0].appendChild(styleTag);
  }

  return styleTag;
}

function update(css) {
  getStyleTag().innerHTML = css || '';
}

chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.action === 'updateCss') {
    update(msg.css);
  }
});
