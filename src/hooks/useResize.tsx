import { useEffect } from 'react';

type Callback = () => void;

export function useResize(callback: Callback, interval = 100) {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line

  useEffect(() => {
    let timeoutID: number;

    function handleResize() {
      window.clearTimeout(timeoutID);
      timeoutID = window.setTimeout(callback, interval);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // eslint-disable-line
}
