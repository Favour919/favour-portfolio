import { useEffect, useState } from "react";

/**
 * Cycles through a list of words with a typewriter effect:
 * types the word out, pauses, deletes it, then moves to the next.
 */
export function useTypewriter(words: string[], options?: {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}) {
  const { typingSpeed = 65, deletingSpeed = 35, pauseMs = 1400 } = options ?? {};
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
