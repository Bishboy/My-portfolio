import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiArrowRightCircle, FiDownload, FiEye, FiX } from "react-icons/fi";
import { CV_DOWNLOAD_FILENAME, CV_PDF_URL } from "../constants/cv";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const Modal = ({ openModal, setOpenModal }: ModalProps) => {
  useEffect(() => {
    if (!openModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openModal, setOpenModal]);

  if (!openModal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      aria-describedby="cv-modal-desc"
      onClick={() => setOpenModal(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-purple-500/30 bg-gray-900/95 p-6 shadow-2xl shadow-purple-950/40 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="absolute right-3 top-3 rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close"
        >
          <FiX className="size-6" />
        </button>

        <h2
          id="cv-modal-title"
          className="pr-10 text-xl font-bold text-white sm:text-2xl"
        >
          Curriculum Vitae
        </h2>
        <p id="cv-modal-desc" className="mt-2 text-sm text-gray-400 sm:text-base">
          Download a PDF copy or view it here in your browser.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={CV_PDF_URL}
            download={CV_DOWNLOAD_FILENAME}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 sm:text-base"
          >
            <FiDownload className="size-5 shrink-0" aria-hidden />
            Download CV
          </a>
          <a
            href={CV_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-purple-500/40 bg-purple-600/80 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 sm:text-base"
          >
            <FiEye className="size-5 shrink-0" aria-hidden />
            View here
            <FiArrowRightCircle className="size-4 shrink-0 opacity-80" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpenModal(false)}
          className="mt-6 w-full rounded-lg border border-gray-600 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
