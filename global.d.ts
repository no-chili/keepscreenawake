export {};

declare global {
  interface Window {
    dataLayer: any[]; // 或用更具体的类型替代 any
  }
  
  // Wake Lock API types
  interface WakeLockSentinel extends EventTarget {
    released: boolean;
    release(): Promise<void>;
  }
  
  interface WakeLock {
    request(type: 'screen'): Promise<WakeLockSentinel>;
  }
  
  interface Navigator {
    wakeLock: WakeLock;
  }
}
