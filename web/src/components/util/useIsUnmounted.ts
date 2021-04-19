import { useEffect, useRef } from "react";

export default function useIsUnmounted(): { current: boolean } {
  const isUnmounted = useRef(false);
  useEffect(
    () => () => {
      isUnmounted.current = true;
    },
    []
  );

  return isUnmounted;
}
