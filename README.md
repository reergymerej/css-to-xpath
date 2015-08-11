Convert css selectors to xpath selectors.

app('.foo'); // '[contains(concat(" ", normalize-space(@class), " "), " foo ")]'