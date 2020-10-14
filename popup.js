'use strict';

let startTracking = document.getElementById('startTracking');
let stopTracking = document.getElementById('stopTracking');

//start tracking the active tab 
startTracking.onclick = function (element) {
    console.log("Start Clicked")
    // retrieve current tab's id and window
    let tabId;
    let windowId;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        tabId = tabs[0].id
        windowId = tabs[0].windowId
    });
    // store the tabId and windowId for use by extension
    chrome.storage.sync.set({ 'tabId': tabId, 'windowId': windowId }, function () {
        console.log(`Tracking started with tabId: ${tabId} and windowId: ${windowId}`)
    })
};

stopTracking.onclick = function (element) {
    console.log("Stop Clicked")
    // remove tracked tab and window ids from storage
    chrome.storage.sync.set({ 'tabId': -1, 'windowId': -1 }, function () {
        console.log(`Tracking stopped`)
    })
};