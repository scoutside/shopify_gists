# `@scoutside/image-resize-js`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

A tiny function that allows us to resize image in javascript instead of only having liquid's img_url filter `{{ image | img_url: "medium" }}`. This method is perfect for our Vue integrations.


* The method will attempt to remove any existing sizing.

**Works with jpg, png, gif, jpeg file extensions**

## Installation

Copy function or polyfill as needed.

## Examples

#### `Polyfill Example`

```javascript
// example 
'//cdn.shopify.com/s/files/1/0087/0462/products/shirt14.jpeg?v=1309278311'.imgURL('medium');
// outputs
'//cdn.shopify.com/s/files/1/0087/0462/products/shirt14_medium.jpeg?v=1309278311'
```

#### `Named Function Example`

```javascript
// example
imgURL('//cdn.shopify.com/s/files/1/0087/0462/products/shirt14.jpeg?v=1309278311', 'medium');
// outputs
'//cdn.shopify.com/s/files/1/0087/0462/products/shirt14_medium.jpeg?v=1309278311'
```