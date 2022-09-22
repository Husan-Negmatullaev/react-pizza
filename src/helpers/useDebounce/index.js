import React from "react";

function useDebounce(callback, delay) {
   const timer = React.useRef(null);

   const debaunceCallback = React.useCallback((...args) => {
      if (timer.current) {
         clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
         callback(...args);
      }, delay)
   }, [delay, callback]);

   return debaunceCallback;
}

export default useDebounce;