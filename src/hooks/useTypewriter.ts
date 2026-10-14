import { useEffect, useState } from "react";

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

/** Cycles through `words`, typing and deleting each one. */
export function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 50, pause = 1400 }: Options = {},
): string {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[index % words.length];

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
