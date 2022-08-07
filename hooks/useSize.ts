import { ReactElement, useEffect, useRef, useState } from "react";

export const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState({height: 0, width: 0});

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({height: window.innerHeight, width: window.innerWidth});
    })
    
    setWindowSize({ height: window.innerHeight, width: window.innerWidth })
  }, []);

  return windowSize;
}



export const useElementSize = () => {
  const ref = useRef<any>(null);
  const [size, setSize] = useState({height: 0 , width: 0})
  useEffect(() => {

    window.addEventListener("resize", () => {
      setSize({ height: ref.current?.offsetHeight || 0, width: ref.current?.offsetWidth || 0 })
    })

    setSize({ height: ref.current?.offsetHeight || 0, width: ref.current?.offsetWidth || 0 })
  }, [ref]);

  return {
    ref,
    ...size
  }
}