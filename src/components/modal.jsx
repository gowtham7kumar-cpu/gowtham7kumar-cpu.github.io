import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-4xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-sm px-2 py-1 rounded bg-black/80 text-white"
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
