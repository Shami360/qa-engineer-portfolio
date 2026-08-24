'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingEffect({
  text,
  className,
  speed = 70,
}: TypingEffectProps) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}
