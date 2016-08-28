# unlinker-extension
Chrome extension that removes links to websites you have no interest in.

# Currently under development. Use at own risk.
To use. Download this (or git clone), in Chrome extension enable developer mode. It's a checkbox at the top right. Then click 'Load unpacked extension...'. Choose the 'Source' folder and click okay. You can also edit the source directly from disk. Just reload the Chrom extensions page for Chrome to reload the extension, then refresh any page.

## Main.js
Check `main.js` for different ways to handle the links you want removed line 9:

* replaceWithSpan: Just replaces the link as a span with the original text.
* redactIt: Replaces the link with `~redacted~`
* begone: Just flat out removes the link. No replacing. 

Please note that the name recently changed from `unlinker` to `Nooooope`. Thanks to the suggestion of @iDevinClark. The folder and repo is still the old name.
