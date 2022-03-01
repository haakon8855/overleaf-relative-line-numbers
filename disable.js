/**
 * Change line numbering style to relative if editor is open
 */
if (typeof window._debug_editors != "undefined") {
    editor = window._debug_editors[window._debug_editors.length - 1];
    editor.setOption("relativeLineNumbers", false);
}