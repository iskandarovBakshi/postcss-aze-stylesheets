# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png" alt="flag" width="32" /> PostCSS Azerbaijani Stylesheets [![Build Status][ci-img]][ci]

> [postcss] plugin for writing Azerbaijani Style Sheets.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/iskandarovBakshi/postcss-aze-stylesheets.svg
[ci]: https://travis-ci.org/iskandarovBakshi/postcss-aze-stylesheets

## Install

`npm install --save-dev postcss-aze-stylesheets`

## Input

```css
.someClass {
  hündürlük: 40piksel;
  görünüş: blok;
  rəng: qara;
  fon-rəng: sarı;
}
```

## Output

```css
.someClass {
  height: 40px;
  display: block;
  color: black;
  background-color: yellow;
}
```

## Usage

```js
postcss([require("postcss-aze-stylesheets")]);
```

See [postcss] docs for examples for your environment.
