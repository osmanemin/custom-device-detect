declare const dedector: (userAgent: string, myCustomUserAgent?: string) => {
    isDesktop: boolean;
    isMobile: boolean;
    isBot: boolean;
    isCustomDevice: boolean;
} | undefined;
export default dedector;
