chrome.runtime.onStartup.addListener(() => {
  openPinnedWarningTab();
});

chrome.runtime.onInstalled.addListener(() => {
  openPinnedWarningTab();
});

function openPinnedWarningTab() {
  chrome.tabs.create({
    url: chrome.runtime.getURL("warning.html"),
    pinned: true,
    active: true
  });
}
