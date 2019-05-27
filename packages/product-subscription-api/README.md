# `@scoutside/product-subscription-api`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

Gives us a simple Front End API for accessing product data with Recharge's subscription metafields. Typically metafields can be tricky to access via javascript. This can be expanded to allow additional metafield namespaces.

## Installation

Add files to appropriate directory in Shopify Theme repo

## API Reference

#### `Simple implementation gives us product data on without a fetch`

1. Add Snippet: `/snippets/product-subscription-json.liquid`:
2. Include snippet:
  - `{% include 'product-subscription-json' %}`
3. Pass it the product object as a variable:
  - `{% include 'product-subscription-json', product: product %}`
4. Wrap snippet in a script:
  - `<script type="application/json" data-product-subscription-json>{% include 'product-subscription-json', product: product %}</script>`
5. Select element and parse JSON:
  -  `JSON.parse($('[data-product-subscription-json]').text())`

#### `Complex API to fetch product data from any page`

1. Add Snippet: `/snippets/product-subscription-json.liquid`:
2. Add Alt Product Template: `/templates/product.subscription.json.liquid`
3. Fetch data:
  - ```javascript
    var handle = 'burton-snowboard'
    
    jQuery.ajax({
      url:'/products/' + handle + '?view=subscription.json',
      success:function(unparsed_json){
        var product_data = JSON.parse(unparsed_json)
        console.log('This just in from product.subscription.json:', product_data)
      }
    })
    ```

#### `Complex API to fetch collection and product data from any page`

1. Add Snippet: `/snippets/product-subscription-json.liquid`:
2. Add Alt Product Template: `/templates/collection.subscription.json.liquid`
3. Fetch data:
  - ```javascript
    var handle = 'burton-snowboard-collection'
    
    jQuery.ajax({
      url:'/collections/' + handle + '?view=subscription.json',
      success:function(unparsed_json){
        var collection_data = JSON.parse(unparsed_json)
        console.log('This just in from collection.subscription.json:', collection_data)
      }
    })
    ```