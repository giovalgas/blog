import { useEffect, useState } from "react";

const THRESHOLD = 40;

interface Props {
  label: string;
  href: string;
}

export default function ScrollCue({ label, href }: Props) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      style={{
        opacity: past ? 0 : 1,
        visibility: past ? "hidden" : "visible",
        pointerEvents: past ? "none" : "auto",
      }}
      className="-ml-3 mt-auto inline-flex w-fit items-center gap-3 rounded-[5px] px-3 py-1.5 text-[13px] text-overlay0 transition-[opacity,visibility,background-color,color] duration-300 ease-[ease] hover:bg-base hover:text-subtext0"
    >
      <span>{label}</span>
      <span className="animate-nudge text-peach" aria-hidden="true">
        ↓
      </span>
    </a>
  );
}
