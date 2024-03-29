# Relative Line Numbering for Overleaf<br/>(Obsolete)

### Warning: This extension no longer works due to Overleaf changing its third-party text editor. It will no longer be maintained unless a new way to enable relative numbering in the new editor is found. Please feel free to contribute or contact if you have any insight into a fix for the new editor.

This Chrome extension adds the ability to change the line numbering style in 
Overleaf to relative (Legacy editor only), a very convenient feature 
for Vim users.

## Installation

This extension can be installed either via the Chrome Web Store or manually.

### Chrome Web Store

The easiest way to install this extension is to download it from the Chrome
Web Store [here](https://chrome.google.com/webstore/detail/relative-line-numbering-f/cpndkecejnblehgenlnogffaeekmkphh).


### Unpacked

Alternatively, if you would like to edit the code and test it, you can clone
the repo and install it as an _unpacked extension_. Google has a
[great guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) for 
doing that. You'll have to enable developer mode in Chrome among other things
to be able to do this.

## How it works

Enabling this in Overleaf is possible because Overleaf's Legacy editor is the 
open-source [Ace](https://ace.c9.io/) editor. This editor has the ability to 
use the relative line numbering style, but Overleaf has not implemented an 
option to enable this in their UI.

To enable relative line numbering, we need to somehow tell _Ace_
this. This can be achieved by running the following code in the console while 
editing a document in Overleaf:
```javascript
editor = window._debug_editors[window._debug_editors.length - 1];
editor.setOption("relativeLineNumbers", true);
```
Here, __true__ could also be substituted with __false__ if one wishes to turn
__off__ relative line numbering after running the code block above. 

This Chrome Extension simply runs the above code each time the user loads a
web page beginning with `overleaf.com`. The extension also has the ability
to toggle this live.

## New Editor

On the 29th November 2022, Overleaf changed its default editor from [Ace](https://ace.c9.io/),
to [CodeMirror 6](https://codemirror.net/). This new editor lacks the ability
for the relative line numbering style, making this extension unusable with the
new editor. For a while, Overleaf still offered users
the option of switching to the the old editor _Ace_.

As of 21nd February 2023, the old _Ace_ editor is no longer available, and this extension sadly no longer works.

## Acknowledgments

- [dirko](https://github.com/dirko) for providing the code block above in an Overleaf feature request thread.

## License

Distributed under the GPLv3 License. See `LICENSE.txt` for more information.
