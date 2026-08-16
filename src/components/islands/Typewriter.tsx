import { useEffect, useState } from "react";

const TYPE_MIN = 62;
const TYPE_MAX = 130;
const HOLD = 2200;
const ERASE = 34;
const PAUSE = 420;

interface Props {
  roles: string[];
}

export default function Typewriter({ roles }: Props) {
  const [text, setText] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    let chars = roles[0].length;
    let typing = false;
    let timer = 0;

    const step = () => {
      let delay: number;
      if (typing) {
        if (chars < roles[index].length) {
          chars += 1;
          delay = TYPE_MIN + Math.random() * (TYPE_MAX - TYPE_MIN);
        } else {
          typing = false;
          delay = HOLD;
        }
      } else if (chars > 0) {
        chars -= 1;
        delay = ERASE;
      } else {
        index = (index + 1) % roles.length;
        typing = true;
        delay = PAUSE;
      }
      setText(roles[index].slice(0, chars));
      timer = window.setTimeout(step, delay);
    };

    timer = window.setTimeout(step, HOLD);
    return () => window.clearTimeout(timer);
  }, [roles]);

  return (
    <span className="flex items-center gap-[2px]">
      <span className="text-peach">{text}</span>
      <span className="term-cursor term-cursor--hero" aria-hidden="true" />
    </span>
  );
}
