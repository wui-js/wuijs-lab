# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **static demo repository** for the [WUI/JS Lib](https://github.com/wuijsproject/wuijs-lib) component library. There is no build system, package manager, or test runner — all demos are plain HTML/CSS/JS files that load WUI components from the `https://wuijs.dev/libraries/` CDN. Demos are published via CodeSandbox by pointing at GitHub paths.

## Creating and Editing Demos

Use the `/wuijs-assistent` skill when creating new WUI/JS demos — it provides templates and guidance.

### Demo directory layout

Each demo lives at `demos/<library>/<component>/<variant>/` and contains exactly:

```
index.html         # HTML structure + CDN resource links
main.js            # Component initialization (DOMContentLoaded)
styles.css         # Page/layout styles
wui.css            # WUI component CSS overrides/customizations
README.md          # Title, description, WUI JS Stack, Documentation links
sandbox.config.json
```

### CDN URL pattern

```
https://wuijs.dev/libraries/wui/<component>/wui-<component>-<version>.css
https://wuijs.dev/libraries/wui/<component>/wui-<component>-<version>.js
```

Example for `wui-button-0.3`:
```html
<link rel="stylesheet" href="https://wuijs.dev/libraries/wui/button/wui-button-0.3.css">
<script src="https://wuijs.dev/libraries/wui/button/wui-button-0.3.js"></script>
```

### JS initialization pattern

```js
const init = () => {
  const component = new WUI[ComponentName]({
    selector: ".wui-[component].my-[component]",
    // options...
    onClick: (value) => { /* handler */ }
  });
  component.init();
}
window.addEventListener("DOMContentLoaded", init);
```

### sandbox.config.json

```json
{
  "template": "static",
  "title": "WUI[ComponentName] - [Variant] demo"
}
```

### README.md structure

```md
# WUI[ComponentName] - [Variant] demo

## Description
...

## WUI JS Stack
- WUIIcon - 0.2
- WUI[ComponentName] - [version]

## Documentation
- [WUI/JS Lib](https://github.com/wuijsproject/wuijs-lib): Global documentation.
- [WUI[ComponentName]](https://github.com/wuijsproject/wuijs-lib?tab=readme-ov-file#wui[componentname]): ...
```

## Bilingual Documentation

`README.md` (English) and `LEEME.md` (Spanish) at the repo root must be kept in sync. Both list all demos with CodeSandbox links and descriptions.

CodeSandbox link pattern:
```
https://codesandbox.io/p/sandbox/github/wuijsproject/wuijs-lab/tree/main/demos/wui/<component>/<variant>
```

## Running Demos Locally

Open `index.html` directly in a browser. No server required — all resources load from CDN.
