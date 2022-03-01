/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link https://gist.github.com/devjin0617/3e8d72d94c1b9e69690717a219644c7a}
 */
let injectScript = (file_path, tag) => {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

let handleUpdate = (isEnabled) => {
    if (isEnabled) {
        injectScript(chrome.runtime.getURL('enable.js'), 'body');
    } else {
        injectScript(chrome.runtime.getURL('disable.js'), 'body');
    }
}

// Set initial value on load
chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
    handleUpdate(isEnabled);
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        if (key == "isEnabled") {
            handleUpdate(newValue);
        }
    }
});