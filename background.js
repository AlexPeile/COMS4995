'use strict';

function isTracking() {
    chrome.storage.sync.get(['tabId', 'windowId'], function (items) {
        if (items[0] === -1 || items[1] === -1) {
            return false
        }
        return true
    });
};

function getTabFromTabId(tabId) {
    let foundTab;
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        foundTab = tab;
    });
    return foundTab;
};

function getTabFromWindowId(windowId) {
    let foundTab;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0] !== undefined) {
            foundTab = tabs[0]
        }
    });
    return foundTab
};

//Add listener for when active tab changes
chrome.tabs.onActivated.addListener(function (activeInfo) {
    if (isTracking()) {
        const tab = getTabFromTabId(activeInfo.tabId)
        let trackedTabId;
        let trackedWindowId;
        chrome.storage.sync.get(['tabId', 'windowId'], function (items) {
            trackedTabId = items[0];
            trackedWindowId = items[1];
        });
    }
});
//Add listener for when focused window changes
chrome.windows.onFocusChanged.addListener(function (windowId) {
    if (isTracking()) {
        const tab = getTabFromWindowId(windowId);
        let trackedTabId;
        let trackedWindowId;
        chrome.storage.sync.get(['tabId', 'windowId'], function (items) {
            trackedTabId = items[0];
            trackedWindowId = items[1];
        });
    };
});