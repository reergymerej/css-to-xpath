[![Build Status](https://travis-ci.org/reergymerej/css-to-xpath.svg)](https://travis-ci.org/reergymerej/css-to-xpath)

Convert css selectors to xpath.

```js
app('.foo'); // '[contains(concat(" ", normalize-space(@class), " "), " foo ")]'

app('.foo.bar'); // '[contains(concat(" ", normalize-space(@class), " "), " foo ") and contains(concat(" ", normalize-space(@class), " "), " bar ")]'
```