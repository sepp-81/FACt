// pages/streamlit-app.js
"use client";
import { useEffect, useRef } from 'react';

export default function StreamlitApp() {
  const iframeRef = useRef<HTMLIFrameElement>(null);  // Explicitly specify the type

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', () => {
        try {
          const iframeHeight = iframe.contentWindow?.document.body.scrollHeight;
          iframe.style.height = `${iframeHeight}px`;
        } catch (error) {
          console.error('Error accessing iframe content:', error);
        }
      });
    }
  }, []);

  return (
    <div className='bg-black'>
      <iframe
        ref={iframeRef}
        src="https://busy-news-flow.loca.lt/"
        width="100%"
        height="600px" // Set a default height to prevent layout issues
        frameBorder="0"
      />
    </div>
  );
}
