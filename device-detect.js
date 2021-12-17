module.exports = (userAgent, myCustomUserAgent = "") => {
  const mobileAndBotDevices = require("./devices.js");

  if (typeof userAgent !== "string") return;

  const deviceType = {
    isDesktop: false,
    isMobile: false,
    isBot: false,
    isCustomDevice: false,
  };

  const currentDevice = mobileAndBotDevices.find((device) => {
    const finedDevice = device.deviceRegexes.find((regex) => {
      if (userAgent.match(regex)) return true;
    });
    return finedDevice;
  });

  if (userAgent === myCustomUserAgent) deviceType.isCustomDevice = true;
  else if (currentDevice && currentDevice.name.match(/mobile|tablet/)) deviceType.isMobile = true;
  else deviceType.isDesktop = true;

  if (currentDevice && currentDevice.name.match(/bot/)) deviceType.isBot = true;
  
  return deviceType;
};
