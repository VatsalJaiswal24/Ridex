
import * as React from "react";

// Add this type declaration to recognize Capacitor on the window object
declare global {
  interface Window {
    Capacitor?: {
      isNativePlatform: boolean;
    };
  }
}

export function useNativePlatform() {
  const [isNative, setIsNative] = React.useState<boolean>(false);
  const [platform, setPlatform] = React.useState<'web' | 'ios' | 'android'>('web');

  React.useEffect(() => {
    // Check if running in a Capacitor container
    const isCapacitor = window.Capacitor && window.Capacitor.isNativePlatform;
    setIsNative(!!isCapacitor);
    
    if (isCapacitor) {
      // Determine platform
      if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
        setPlatform('ios');
      } else if (navigator.userAgent.includes('Android')) {
        setPlatform('android');
      }
    }
  }, []);

  return {
    isNative,
    platform,
    isIOS: platform === 'ios',
    isAndroid: platform === 'android'
  };
}
