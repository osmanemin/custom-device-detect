# Custom Device Detect

custom-device-detect is a user agent parser.<br/>
custom-device-detect will pars your custom user agent and detect your device.<br/>

## Installation

```js
npm i custom-device-detect
```

## Usage

```js
const deviceDetect = require("custom-device-detect");

const userAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1";
const parsedUserAgent = deviceDetect(userAgent);
console.log(parsedUserAgent);
// result:
/* {
    isDesktop: false,
    isMobile: true,
    isBot: false,
    isCustomDevice: false,
  }*/
```

**Example** - custom user agent detection:<br/>

```js
const deviceDetect = require("custom-device-detect");

const userAgent = "osmanaga's phone";
const myCustomUserAgent = "osmanaga's phone";

const parsedUserAgent = deviceDetect(userAgent, myCustomUserAgent);
console.log(parsedUserAgent);
// result:
/* {
    isDesktop: false,
    isMobile: false,
    isBot: false,
    isCustomDevice: true,
  }*/
```

Google bots sometimes can be mobile and sometimes desktop.<br/>
**Example** - user agent bot detection:

```js
const deviceDetect = require("custom-device-detect");

// if user agent is a mobile bot
const userAgent =
  "Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)";
const parsedUserAgent = deviceDetect(userAgent);
console.log(parsedUserAgent);
// result:
/* {
    isDesktop: false,
    isMobile: true,
    isBot: true,
    isCustomDevice: false,
  }*/
```
