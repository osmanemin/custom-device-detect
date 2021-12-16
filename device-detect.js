module.exports = (userAgent, myCustomUserAgent = "") => {
  const mobileDevices = require("./devices.js");

  if (typeof userAgent !== "string") return;

  const deviceType = {
    isDesktop: false,
    isMobile: false,
    isBot: false,
    isCustomDevice: false,
  };
  let currentDevice = "";

  mobileDevices.find((device) => {
    const finedDevice = device.deviceRegex.find((regex) => {
      if (userAgent.match(regex)) {
        currentDevice = device.name;
        return currentDevice;
      }
    });
    return finedDevice;
  });

  if (userAgent === myCustomUserAgent) deviceType.isCustomDevice = true;
  else if (currentDevice.match(/mobile|tablet/)) deviceType.isMobile = true;
  else deviceType.isDesktop = true;
  if (currentDevice.match(/bot/)) deviceType.isBot = true;
  return deviceType;
};
