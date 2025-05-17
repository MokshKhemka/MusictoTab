export function loadOpenCV(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    if (window.cv) {
      resolve();
      return;
    }

    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/4.8.0/opencv.js';
    script.async = true;
    script.onload = () => {
      // Wait for OpenCV to be ready
      if (window.cv) {
        resolve();
      } else {
        window.onOpenCvReady = () => {
          resolve();
        };
      }
    };
    document.head.appendChild(script);
  });
} 