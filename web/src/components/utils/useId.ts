import { useRef } from "react";

let nextId = 1000;

export default function useId(): string {
  const idRef = useRef<number | null>(null);
  if (idRef.current === null) {
    idRef.current = nextId++;
  }
  return "id-" + idRef.current;
}
