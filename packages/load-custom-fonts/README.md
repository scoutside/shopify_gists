# `@scoutside/load-custom-fonts`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

We sometimes come across the need to serve fonts to a third party. Particularly Recharge's checkout or payments page. Since we do not have access to the source code, we can not serve our custom fonts.

However, with the help of Shopify's CDN, we can serve up any font we want!

## Installation

1. Name and add fonts to Shopify's CDN
![](http://g.recordit.co/6ydKjKsyCf.gif)

2. Copy and paste that url

3. Use css's `@font-face` to call our Shopify's CDN for our font.

```css
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 200;
  src: local('Work Sans ExtraLight'), local('WorkSans-ExtraLight'), url(https://cdn2.shopify.com/s/files/1/0087/3834/0927/files/WorkSans-ExtraLight-ext.woff2?27454) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
```