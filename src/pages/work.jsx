import { useState } from "react";
import Modal from "../components/modal.jsx";

// --- YouTube thumbnail helpers ---
const getYouTubeId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.pathname.includes("/embed/")) return u.pathname.split("/embed/")[1];
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    return "";
  } catch {
    return "";
  }
};

const getThumb = (p) => {
  if ((p.type || "").toLowerCase() === "youtube") {
    const id = getYouTubeId(p.src);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "/thumbnails/fallback.jpg";
  }
  return p.thumbnail || "/thumbnails/fallback.jpg";
};

// --- Project data ---
const projects = [
  {
    id: 1,
    title: "Commercial shoot – Wildwater",
    type: "youtube",
    src: "https://www.youtube.com/embed/QHDLxhRGpsM",
  },
  {
    id: 2,
    title: "Commercial shoot – Wildwater",
    type: "youtube",
    src: "https://www.youtube.com/embed/cx6B9gQ0vBE",
  },
  {
    id: 3,
    title: "Barkaas Hyderabad",
    type: "instagram",
    src: "https://www.instagram.com/p/DQbzK3-ALoW/embed/",
    thumbnail: "/thumbnails/barkaas.jpg",
  },
  {
    id: 4,
    title: "Showreel – Local MP4 Example",
    type: "mp4",
    src: "/reel/sample.mp4",
    thumbnail: "/thumbnails/showreel.jpg",
  },
];

export default function Work() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const openVideo = (item) => {
    setCurrent(item);
    setOpen(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-semibold tracking-tight">Our Work</h2>
      <div className="h-[3px] w-12 mt-3 bg-[#d7263d]" />

      {/* Project grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => openVideo(p)}
            className="group aspect-video rounded-xl border overflow-hidden text-left relative"
            style={{ borderColor: "#d7263d" }}
          >
            {/* Thumbnail */}
            <img
              src={getThumb(p)}
              alt={p.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/thumbnails/fallback.jpg";
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">
              <div className="text-sm font-medium">{p.title}</div>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d7263d]">
                ▶ Play
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal playback */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          className={`relative w-full ${
            current?.type === "instagram" ? "aspect-[9/16]" : "aspect-video"
          } bg-black`}
        >
          {/* YouTube */}
          {current && current.type === "youtube" && (
            <iframe
              key={current.src}
              title={current.title}
              className="w-full h-full"
              src={`${current.src}?autoplay=1&mute=1&playsinline=1&rel=0`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* MP4 */}
          {current && current.type === "mp4" && (
            <video
              key={current.src}
              className="w-full h-full"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src={current.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Instagram */}
          {current && current.type === "instagram" && (
            <iframe
              key={current.src}
              title={current.title}
              className="w-full h-full"
              src={current.src}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{current?.title}</h3>
        </div>
      </Modal>
    </main>
  );
}
