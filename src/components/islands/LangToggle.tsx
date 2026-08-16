import type { Lang } from "@/i18n/ui";

interface Props {
  lang: Lang;
  enHref: string;
  ptHref: string;
  label: string;
}

export default function LangToggle({ lang, enHref, ptHref, label }: Props) {
  const target = lang === "pt" ? enHref : ptHref;

  function remember() {
    try {
      window.localStorage.setItem("lang", lang === "pt" ? "en" : "pt");
    } catch {}
  }

  return (
    <a
      href={target}
      onClick={remember}
      aria-label={label}
      className="fixed top-[26px] right-4 z-20 bg-transparent p-2 text-[12px] desk:right-[30px]"
    >
      <span className={lang === "pt" ? "text-peach" : "text-overlay0"}>pt</span>
      <span className="text-surface1"> / </span>
      <span className={lang === "en" ? "text-peach" : "text-overlay0"}>en</span>
    </a>
  );
}
