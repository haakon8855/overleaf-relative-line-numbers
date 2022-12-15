/**
 * Haakon8855
 */

let toggleButton = document.getElementById("toggleEnabled");
let slider = document.getElementById("sliderElem");

let updateSlider = (isEnabled) => {
    // Updates the state of the slider button
    toggleButton.checked = isEnabled;
};

// Set the slider button to the state stored in storage
chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
    updateSlider(isEnabled);
});

// Add the transition animation after correct state has been set.
// For some reason it did not work simply adding the class right away
// so I added a small delay to avoid seeing the animation upon opening
// the popup.
setTimeout(() => {
    slider.classList.add("sliderAnim");
}, 100);

// Add the event listener to the slider checkbox in order to store the updated
// state in storage.
toggleButton.addEventListener("click", async () => {
    chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
        isEnabled = !isEnabled;
        chrome.storage.sync.set({ isEnabled });
        updateSlider(isEnabled);
    });
});

// Visibility of help text
let helpLink = document.getElementById("popup-help-link");
helpLink.addEventListener("click", () => {
    helpLink.style.display = "none";
    document.getElementById("popup-help-text").style.display = "inline";
});
