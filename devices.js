module.exports = [
  {
    name: "mobile-bot",
    deviceRegex: [
      /googlebot-mobile/i,
      /\+http:\/\/www.google.com\/bot.html/,
      /mobile/i,
      /http:\/\/www.google.com\/mobile\/adsbot.html/,
      /(iPhone|Windows Phone)/,
      /bingbot/,
    ],
  },
  {
    name: "bot",
    deviceRegex: [
      /(ads|google|bing|msn|yandex|baidu|ro|career|seznam|)bot/i,
      /(baidu|jike|symantec)spider/i,
      /scanner/i,
      /(web)crawler/i,
    ],
  },
  {
    name: "tablet-ipad",
    deviceRegex: [/ipad/i],
  },
  {
    name: "mobile-iphone",
    deviceRegex: [/ip(hone|od)/i],
  },
  {
    name: "mobile-android",
    deviceRegex: [/android.*(mobile|mini)/i],
  },
  {
    name: "tablet-android",
    deviceRegex: [/android 3/i, /android/i],
  },
  {
    name: "tablet-rim",
    deviceRegex: [/PlayBook; U; RIM Tablet/i],
  },
  {
    name: "tablet-hp",
    deviceRegex: [/hp-tablet.*TouchPad/i],
  },
  {
    name: "tablet-kindle",
    deviceRegex: [/Kindle/i],
  },
  {
    name: "tablet-microsoft",
    deviceRegex: [/Touch.+Tablet PC/, /Windows NT [0-9.]+; ARM;/],
  },
  {
    name: "tablet",
    deviceRegex: [/tablet/i],
  },
  {
    name: "mobile-firefoxos",
    deviceRegex: [/Mobile.+Firefox/],
  },
  {
    name: "mobile-smartphone",
    deviceRegex: [
      /^HTC/,
      /Fennec/,
      /IEMobile/,
      /BlackBerry/,
      /BB10.*Mobile/,
      /GT-.*Build\/GINGERBREAD/,
      /SymbianOS.*AppleWebKit/,
    ],
  },
  {
    name: "mobile-generic",
    deviceRegex: [
      /symbian/i,
      /sonyericsson/i,
      /nokia/i,
      /samsung/i,
      /lg/i,
      /bada/i,
      /blazer/i,
      /cellphone/i,
      /iemobile/i,
      /midp-2.0/i,
      /u990/i,
      /netfront/i,
      /opera mini/i,
      /palm/i,
      /nintendo wii/i,
      /playstation portable/i,
      /portalmmm/i,
      /proxinet/i,
      /sonyericsson/i,
      /symbian/i,
      /windows\ ?ce/i,
      /winwap/i,
      /eudoraweb/i,
      /htc/i,
      /240x320/i,
      /avantgo/i,
    ],
  },
];
