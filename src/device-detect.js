"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const devices_1 = __importDefault(require("./devices"));
const dedector = (userAgent, myCustomUserAgent = "") => {
    if (typeof userAgent !== "string")
        return;
    const deviceType = {
        isDesktop: false,
        isMobile: false,
        isBot: false,
        isCustomDevice: false,
    };
    const currentDevice = devices_1.default.find((device) => {
        const findedDevice = device.deviceRegexes.find((regex) => {
            return userAgent.match(regex);
        });
        return findedDevice;
    });
    if (userAgent === myCustomUserAgent)
        deviceType.isCustomDevice = true;
    else if (currentDevice && currentDevice.name.match(/mobile|tablet/))
        deviceType.isMobile = true;
    else
        deviceType.isDesktop = true;
    if (currentDevice && currentDevice.name.match(/bot/))
        deviceType.isBot = true;
    return deviceType;
};
exports.default = dedector;
