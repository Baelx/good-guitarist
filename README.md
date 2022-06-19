# Good Guitarist Wordpress Theme

Created with the [awps starter theme](http://www.alecaddd.com/wp-content/uploads/2017/05/awps-logo.png).


## Install

1. `composer install`
2. `yarn install`

## Blocks compilation issue

If you run into an error when compiling Gutenberg blocks with Laravel Mix, the issue may lie with the @tinypixelco dependency. To resolve it, try adding this constructor to the index.js file of the class within the @tinypixelco/laravel-mix-wp-blocks dependency in node_modules:

```
  constructor() {
    super();
    this.context = Mix
  }
```