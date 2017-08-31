# Opening Crawl Animation

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
