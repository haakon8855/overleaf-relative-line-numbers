/**
 * Haakon8855
 */

chrome.runtime.onInstalled.addListener(() => {
    let isEnabled = true;
    chrome.storage.sync.set({ isEnabled });
});