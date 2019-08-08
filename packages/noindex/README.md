# `@scoutside/noindex`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

Prevent Google from crawling with a meta tag:
```html
<meta name="robots" content="noindex">
```

## Installation

Add snippets, sections, code to theme files

## Examples

#### `Hide Dev Store`

A simple liquid conditional to prevent google from crawling our dev stores.

Add `snippet--noindex-dev-store.liquid` in `snippets/` directory.
Include `snippet--noindex-dev-store.liquid` in `layout/theme.liquid` file.

```html
<head>
  {% include 'snippet--noindex-dev-store' %}
</head>
```

#### `Hide Specific Pages`

A more robust system for preventing google from crawling select pages using section blocks.

Add `section--noindex.liquid` in `sections/` directory.
Add `snippet--noindex.liquid` in `snippets/` directory.
Include `snippet--noindex.liquid` in `layout/theme.liquid` file.

```html
<head>
  {% include 'snippet--noindex' %}
</head>
```
