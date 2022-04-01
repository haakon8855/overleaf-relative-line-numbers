# Relative Line Numbering for Overleaf

Adds the ability to change the line numbering style in Overleaf to relative,
which is very convenient for Vim users.

## Installation

The easiest way to install this extension is to download it from the Chrome
Web Store [here](https://chrome.google.com/webstore/detail/relative-line-numbering-f/cpndkecejnblehgenlnogffaeekmkphh).

If you would like to edit the code and test it, you can clone the repo and install it as an _unpacked extension_. Google has a [great guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for doing that. You'll have to enable developer mode in chrome among other things to be able to do this.

## How it works

Enabling this in Overleaf is possible because Overleaf uses the open-source [Ace](https://ace.c9.io/) editor. This editor has the ability to use the relative line numbering style, but Overleaf has not implemented an option to enable this as of
writing this text.

To enable relative line numbering, it is only necessary to somehow tell _Ace_
this, as Overleaf does not interfere with this setting in _Ace_. To do this
we need only run the following code in the console while editing a document in 
Overleaf:
```javascript
editor = window._debug_editors[window._debug_editors.length - 1];
editor.setOption("relativeLineNumbers", true);
```
Here, __true__ could also be substituted by __false__ if one wishes to turn
__off__ relative line numbering after running the code block above. 

This Chrome Extension simply runs the above code each time the user loads a
web page beginning with `overleaf.com`. The extension also has the ability
to toggle this live.

## Acknowledgments

- [dirko](https://github.com/dirko) for providing the code block above in an Overleaf feature request thread.

## License
Distributed under the GPLv3 License. See `LICENSE.txt` for more information.