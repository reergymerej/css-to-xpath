Convert css selectors to xpath selectors.

```js
app('.foo'); // '[contains(concat(" ", normalize-space(@class), " "), " foo ")]'

app('.foo.bar'); // '[contains(concat(" ", normalize-space(@class), " "), " foo ") and contains(concat(" ", normalize-space(@class), " "), " bar ")]'
```