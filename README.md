# [slack101.net](https://slack101.net/)

## How to add translation?
* create a folder in public/locales directory named with language id (e.g. fr for French)
* create a file named common.json, copy all the keys from public/locales/en/common.json to it and translate them.
* add your locale id to the `locales` array in next-i18next.config.js file.