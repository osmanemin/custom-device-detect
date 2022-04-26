const assert = require("assert");
const deviceDetect = require("../device-detect");

describe("Bot test", () => {
  it("Dispatch", () => {
    const userAgent = deviceDetect("Dispatch/1.0.1");
    assert.equal(userAgent.isBot, true);
  });
  it("Mediapartners-Google", () => {
    const userAgent = deviceDetect("Mediapartners-Google");
    assert.equal(userAgent.isBot, true);
  });
  it("AhrefsBot", () => {
    const userAgent = deviceDetect("Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)");
    assert.equal(userAgent.isBot, true);
  });
  it("criteo", () => {
    const userAgent = deviceDetect("CriteoBot/0.1 (+https://www.criteo.com/criteo-crawler/)");
    assert.equal(userAgent.isBot, true);
  });
  it("service-fetcher", () => {
    const userAgent = deviceDetect("ias-ir/3.1 (+https://www.admantx.com/service-fetcher.html)");
    assert.equal(userAgent.isBot, true);
  });
  it("k8s", () => {
    const userAgent = deviceDetect("kube-pro/1.21");
    assert.equal(userAgent.isBot, true);
  });
  it("Browser", () => {
    const userAgent = deviceDetect("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36");
    assert.equal(userAgent.isBot, false);
  });
  it("Thetradedesk", () => {
    const userAgent = deviceDetect("Mozilla/5.0 (compatible; TTD-Content; +https://www.thetradedesk.com/general/ttd-content)");
    assert.equal(userAgent.isBot, true);
  });
  it("MiuiBrowser", () => {
    const userAgent = deviceDetect("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/89.0.4389.116 Safari/534.24 XiaoMi/MiuiBrowser/13.3.1-gn");
    assert.equal(userAgent.isBot, false);
  });
});
