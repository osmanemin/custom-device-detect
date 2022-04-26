module.exports = [
  {
    name: "mobile-bot",
    deviceRegexes: [
      /googlebot-mobile/i,
      /\+http:\/\/www.google.com\/bot.html/,
      /http:\/\/www.google.com\/mobile\/adsbot.html/,
      /bingbot/,
    ],
  },
  {
    name: "bot",
    deviceRegexes: [
      /(ads|google|bing|msn|yandex|baidu|ro|career|seznam|)bot/i,
      /(baidu|jike|symantec)spider/i,
      /scanner/i,
      /(web|criteo-)crawler/i,
      /Dispatch/i,
      /Mediapartners-Google/i,
      /AhrefsBot/i,
      /service-fetcher/i,
      /kube/i,
      /thetradedesk/i
    ],
  },
  {
    name: "tablet-ipad",
    deviceRegexes: [/ipad/i],
  },
  {
    name: "mobile-iphone",
    deviceRegexes: [/ip(hone|od)/i],
  },
  {
    name: "mobile-android",
    deviceRegexes: [/android.*(mobile|mini)/i],
  },
  {
    name: "tablet-android",
    deviceRegexes: [/android 3/i, /android/i],
  },
  {
    name: "tablet-rim",
    deviceRegexes: [/PlayBook; U; RIM Tablet/i],
  },
  {
    name: "tablet-hp",
    deviceRegexes: [/hp-tablet.*TouchPad/i],
  },
  {
    name: "tablet-kindle",
    deviceRegexes: [/Kindle/i],
  },
  {
    name: "tablet-microsoft",
    deviceRegexes: [/Touch.+Tablet PC/, /Windows NT [0-9.]+; ARM;/],
  },
  {
    name: "tablet",
    deviceRegexes: [/tablet/i],
  },
  {
    name: "mobile-firefoxos",
    deviceRegexes: [/Mobile.+Firefox/],
  },
  {
    name: "mobile-smartphone",
    deviceRegexes: [
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
    deviceRegexes: [
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
