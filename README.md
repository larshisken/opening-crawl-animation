# Opening Crawl Animation

[![npm version](https://badge.fury.io/js/opening-crawl-animation.svg)](https://badge.fury.io/js/opening-crawl-animation)

A small library written in vanilla JavaScript providing a basic [opening crawl animation](https://en.wikipedia.org/wiki/Star_Wars_opening_crawl).

## Install

Install using npm

```
npm install opening-crawl-animation
```

## Usage

Use the library as a global

```html
<link rel="stylesheet" href="./build/oca.css">
<script type="text/javascript" src="./build/var/oca.min.js"></script>
<script type="text/javascript">
    (function IIFE() {
        Oca();
    })();
</script>
```

Or import using require

```javascript
const Oca = require('opening-crawl-animation');
Oca();
```

Try with the following html

```html
<div class="oca-container">
    <h1 class="oca-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
</div>
```
