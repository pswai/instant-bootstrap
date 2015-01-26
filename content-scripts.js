function getStyleTag() {
  var id = 'ibs-inline-style';
  var styleTag = document.getElementById(id);

  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = id;
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
