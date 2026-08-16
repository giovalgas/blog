import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { DocEntry, DocLabels, TmuxWindow } from "@/i18n/ui";

interface Props {
  files: DocEntry[];
  labels: DocLabels;
  windows: TmuxWindow[];
}

const ACTION =
  "-my-2 cursor-pointer py-2 transition-colors duration-[140ms] ease-[ease] hover:text-peach active:text-peach";

export default function CvPane({ files, labels, windows }: Props) {
  const [openFile, setOpenFile] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpenFile(null), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!openFile) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openFile, close]);

  return (
    <>
      <ul className="flex flex-col text-[13px]">
        {files.map((doc) => (
          <li
            key={doc.file}
            className="-mx-3 grid grid-cols-1 gap-y-1.5 rounded-[5px] border-t-[0.5px] border-base px-3 py-[15px] transition-colors duration-[160ms] ease-[ease] hover:bg-base desk:grid-cols-[230px_1fr_auto] desk:items-baseline desk:gap-x-6 desk:gap-y-0"
          >
            <span className="break-all text-text">{doc.file}</span>
            <span className="text-[12px] text-overlay0 desk:text-[13px] desk:text-subtext0">
              {doc.description}
            </span>
            <span className="mt-1 flex items-baseline gap-3.5 desk:mt-0">
              <button
                type="button"
                className={`text-subtext0 ${ACTION}`}
                onClick={() => setOpenFile(doc.file)}
              >
                {labels.open}
              </button>
              <span className="text-surface0">|</span>
              <a className={`text-subtext0 ${ACTION}`} href={`/documents/${doc.file}`} download>
                {labels.download}
              </a>
            </span>
          </li>
        ))}
      </ul>

      {mounted && openFile
        ? createPortal(
            <div className="fixed inset-0 z-40 flex animate-fade-in flex-col justify-end bg-crust/72">
              <button
                type="button"
                aria-label={labels.closeHint}
                onClick={close}
                className="absolute inset-0 h-full w-full cursor-default"
              />

              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${labels.paneLabel}: ${openFile}`}
                className="relative flex h-[92svh] animate-pane-up flex-col border-t border-peach bg-crust desk:h-[78vh]"
              >
                <div className="flex items-center justify-between gap-4 border-b-[0.5px] border-surface0 bg-base px-4 py-[14px] text-[13px] desk:gap-6 desk:px-6">
                  <span className="flex min-w-0 items-baseline gap-2.5">
                    <span className="text-peach">$</span>
                    <span className="truncate text-subtext0">less ~/documents/{openFile}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-[22px]">
                    <a
                      className={`text-subtext0 ${ACTION}`}
                      href={`/documents/${openFile}`}
                      download
                    >
                      {labels.downloadPdf}
                    </a>
                    <button
                      ref={closeRef}
                      type="button"
                      className={`text-overlay0 ${ACTION}`}
                      onClick={close}
                    >
                      {labels.close}
                    </button>
                  </span>
                </div>

                <iframe
                  src={`/documents/${openFile}`}
                  title={`${labels.preview} ${openFile}`}
                  className="min-h-0 w-full flex-1 border-0 bg-base"
                />

                <div className="flex items-center justify-between gap-6 bg-surface0 pt-[7px] pb-[calc(7px+env(safe-area-inset-bottom))] pl-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] text-[12px] text-subtext0">
                  <div className="flex items-center gap-3.5">
                    <span className="rounded-[3px] bg-peach px-[9px] py-px text-crust">
                      giovalgas
                    </span>
                    {windows.map((win) => (
                      <span key={win.label} className={win.active ? "text-text" : "text-overlay0"}>
                        {win.active ? `${win.label}*` : win.label}
                      </span>
                    ))}
                  </div>
                  <span className="hidden shrink-0 text-overlay0 desk:block">
                    {labels.closeHint}
                  </span>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
