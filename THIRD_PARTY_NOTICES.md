# Third-party notices

## mp4-muxer 5.2.2 (bundled)

`runtime/vendor/mp4-muxer.min.js` is shared by the editor and Agent renderer and is used to write MP4 files.
Source: https://github.com/Vanilagy/mp4-muxer — licensed under the MIT License:

```
MIT License

Copyright (c) 2023 Vanilagy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Fonts (bundled in this Skill)

All original Japanese, Chinese and Korean font mappings are bundled under `assets/fonts`.
`assets/fonts/manifest.json` records every source URL, weight specification, font-file SHA-256 and license path.
The 40 families are distributed under the SIL Open Font License 1.1; every family's original copyright and OFL
notice is retained in its `*-OFL.txt` file. The font binaries are unmodified downloads of the original requested
specifications, including the variable-weight requests. Runtime font loading uses local CSS and binaries.

## Playwright

The declared npm dependency is Playwright 1.64.0, Apache-2.0. `npm ci` installs its original package and notices.
Chromium is an explicitly declared browser dependency installed separately or supplied through an existing
Chrome/Edge installation; this Skill does not redistribute a browser binary.
