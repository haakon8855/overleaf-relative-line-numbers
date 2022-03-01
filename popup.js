let toggleButton = document.getElementById("toggleEnabled");

function updatePopup(isEnabled) {
    let toggleButton = document.getElementById("toggleEnabled");
    toggleButton.checked = isEnabled
    // let flavorText = document.getElementById("textStatus");
    // flavorText.innerHTML = (isEnabled ? "Enabled" : "Disabled");
}

chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
    updatePopup(isEnabled);
});

toggleButton.addEventListener("click", async () => {
    chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
        isEnabled = !isEnabled;
        chrome.storage.sync.set({ isEnabled });
        updatePopup(isEnabled);
    });
});
