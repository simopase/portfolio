// lenis-provider.tsx
"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from 'lenis/react';

import { FC, useRef, useEffect} from "react";
import { cancelFrame, frame } from 'framer-motion';


type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null)
  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    console.log(frame)
    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])
  return <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children}</ReactLenis>;
};

export default LenisScrollProvider;