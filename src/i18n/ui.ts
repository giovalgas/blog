export const LANGS = ["en", "pt"] as const;

export const DEFAULT_LANG = "en" as const;

export type Lang = (typeof LANGS)[number];

export interface Segment {
  text: string;
  accent?: boolean;
}

export interface CommandLink {
  command: string;
  hint: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface DocEntry {
  file: string;
  description: string;
}

export interface DocLabels {
  open: string;
  download: string;
  downloadPdf: string;
  close: string;
  closeHint: string;
  paneLabel: string;
  preview: string;
}

export interface Ui {
  htmlLang: string;
  hreflang: string;
  title: string;
  description: string;
  home: string;
  blog: string;
  rss: string;
  toggleLabel: string;
  hero: {
    whoami: string;
    roles: string[];
    links: CommandLink[];
    scrollCue: string;
  };
  about: {
    command: string;
    p1: Segment[];
    p2: Segment[];
    tagline: string;
  };
  documents: {
    command: string;
    files: DocEntry[];
    labels: DocLabels;
  };
  blogIndex: {
    title: string;
    description: string;
    backCommand: string;
    listCommand: string;
    one: string;
    many: string;
    emptyCommand: string;
    emptyHint: string;
  };
  post: {
    backCommand: string;
    prev: string;
    next: string;
  };
  footer: NavLink[];
}

const social = {
  github: "https://github.com/giovalgas",
  linkedin: "https://www.linkedin.com/in/giovalgas/",
  instagram: "https://www.instagram.com/giosvalgas/",
  youtube: "https://www.youtube.com/@giovalgasdev",
  email: "mailto:contato@giovalgas.dev.br",
};

export const ui: Record<Lang, Ui> = {
  en: {
    htmlLang: "en",
    hreflang: "en",
    title: "Giovani Valgas",
    description:
      "Self-taught Senior Software Engineer, currently Tech Lead at Prolog App, in Florianópolis, Brazil.",
    home: "/",
    blog: "/blog",
    rss: "/rss.xml",
    toggleLabel: "Switch to Portuguese",
    hero: {
      whoami: "whoami",
      roles: ["Tech Lead", "Senior Software Engineer"],
      links: [
        {
          command: "open github",
          hint: "github.com/giovalgas",
          href: social.github,
          external: true,
        },
        {
          command: "open linkedin",
          hint: "linkedin.com/in/giovalgas",
          href: social.linkedin,
          external: true,
        },
        { command: "mail", hint: "contato@giovalgas.dev.br", href: social.email },
        { command: "tmux select-window -t blog", hint: "notes and articles", href: "/blog" },
      ],
      scrollCue: "scroll for more",
    },
    about: {
      command: "cat ABOUT.md",
      p1: [
        { text: "Self-taught " },
        { text: "Senior Software Engineer", accent: true },
        { text: ", currently " },
        { text: "Tech Lead", accent: true },
        { text: " at Prolog App, in Florianópolis, Brazil." },
      ],
      p2: [
        { text: "I work mostly with " },
        { text: "Java", accent: true },
        { text: ", " },
        { text: "Spring Boot", accent: true },
        { text: " and " },
        { text: "PostgreSQL", accent: true },
        { text: ", and I do " },
        { text: "DevOps", accent: true },
        { text: " and infrastructure work in " },
        { text: "AWS", accent: true },
        { text: " and " },
        { text: "GCP", accent: true },
        { text: "." },
      ],
      tagline: "Passion for building robust and scalable systems.",
    },
    documents: {
      command: "ls ~/documents",
      files: [
        { file: "giovani-valgas-cv-en.pdf", description: "resume in english" },
        {
          file: "giovani-valgas-cv-ptbr.pdf",
          description: "resume in portuguese",
        },
      ],
      labels: {
        open: "open",
        download: "download",
        downloadPdf: "download pdf",
        close: "esc",
        closeHint: "esc to close",
        paneLabel: "Resume",
        preview: "Preview of",
      },
    },
    blogIndex: {
      title: "blog",
      description: "Notes and articles by Giovani Valgas about backend, infrastructure and DevOps.",
      backCommand: "tmux select-window -t home",
      listCommand: "ls -t ~/blog",
      one: "post",
      many: "posts",
      emptyCommand: "ls: ~/blog: 0 entries",
      emptyHint: "the first posts are coming soon.",
    },
    post: {
      backCommand: "cd ..",
      prev: "previous",
      next: "next",
    },
    footer: [
      { label: "github", href: social.github, external: true },
      { label: "linkedin", href: social.linkedin, external: true },
      { label: "instagram", href: social.instagram, external: true },
      { label: "youtube", href: social.youtube, external: true },
      { label: "email", href: social.email },
      { label: "blog", href: "/blog" },
    ],
  },
  pt: {
    htmlLang: "pt-BR",
    hreflang: "pt-BR",
    title: "Giovani Valgas",
    description:
      "Senior Software Engineer autodidata, hoje Tech Lead na Prolog App, em Florianópolis, SC.",
    home: "/pt/",
    blog: "/pt/blog",
    rss: "/pt/rss.xml",
    toggleLabel: "Mudar para o inglês",
    hero: {
      whoami: "whoami",
      roles: ["Tech Lead", "Senior Software Engineer"],
      links: [
        {
          command: "open github",
          hint: "github.com/giovalgas",
          href: social.github,
          external: true,
        },
        {
          command: "open linkedin",
          hint: "linkedin.com/in/giovalgas",
          href: social.linkedin,
          external: true,
        },
        { command: "mail", hint: "contato@giovalgas.dev.br", href: social.email },
        { command: "tmux select-window -t blog", hint: "notas e artigos", href: "/pt/blog" },
      ],
      scrollCue: "role para saber mais",
    },
    about: {
      command: "cat SOBRE.md",
      p1: [
        { text: "Senior Software Engineer", accent: true },
        { text: " autodidata, hoje " },
        { text: "Tech Lead", accent: true },
        { text: " na Prolog App, em Florianópolis, SC." },
      ],
      p2: [
        { text: "Trabalho principalmente com " },
        { text: "Java", accent: true },
        { text: ", " },
        { text: "Spring Boot", accent: true },
        { text: " e " },
        { text: "PostgreSQL", accent: true },
        { text: ", e faço " },
        { text: "DevOps", accent: true },
        { text: " e infraestrutura em " },
        { text: "AWS", accent: true },
        { text: " e " },
        { text: "GCP", accent: true },
        { text: "." },
      ],
      tagline: "Paixão por construir sistemas robustos e escaláveis.",
    },
    documents: {
      command: "ls ~/documents",
      files: [
        {
          file: "giovani-valgas-cv-ptbr.pdf",
          description: "currículo em português",
        },
        { file: "giovani-valgas-cv-en.pdf", description: "resumo em inglês" },
      ],
      labels: {
        open: "abrir",
        download: "baixar",
        downloadPdf: "baixar pdf",
        close: "esc",
        closeHint: "esc para fechar",
        paneLabel: "Currículo",
        preview: "Visualização de",
      },
    },
    blogIndex: {
      title: "blog",
      description: "Notas e artigos de Giovani Valgas sobre backend, infraestrutura e DevOps.",
      backCommand: "tmux select-window -t home",
      listCommand: "ls -t ~/blog",
      one: "texto",
      many: "textos",
      emptyCommand: "ls: ~/blog: 0 entradas",
      emptyHint: "os primeiros textos vêm em breve.",
    },
    post: {
      backCommand: "cd ..",
      prev: "anterior",
      next: "próximo",
    },
    footer: [
      { label: "github", href: social.github, external: true },
      { label: "linkedin", href: social.linkedin, external: true },
      { label: "instagram", href: social.instagram, external: true },
      { label: "youtube", href: social.youtube, external: true },
      { label: "email", href: social.email },
      { label: "blog", href: "/pt/blog" },
    ],
  },
};

export function other(lang: Lang): Lang {
  return lang === "en" ? "pt" : "en";
}

export function readingTime(lang: Lang, minutes: number): string {
  return lang === "en" ? `${minutes} min read` : `${minutes} min`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function postPath(lang: Lang, slug: string): string {
  return `${ui[lang].blog}/${slug}`;
}

export type Window = "home" | "blog";

export interface TmuxWindow {
  label: string;
  href: string;
  active: boolean;
}

export function windows(lang: Lang, active: Window): TmuxWindow[] {
  return [
    { label: "0:home", href: ui[lang].home, active: active === "home" },
    { label: "1:blog", href: ui[lang].blog, active: active === "blog" },
  ];
}
