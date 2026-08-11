import { useEffect, useState } from "react";

import "./ProjectViewer.css";

import type { Photo } from "../../data/types";
import Lightbox from "../Lightbox/Lightbox";

type Props = {
  photos: Photo[];
};

function ProjectViewer({ photos }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (photos.length === 0 || selectedIndex !== null) return;

    const delay = 5000 + Math.random() * 2000;

    const timer = setTimeout(() => {
      setVisible(false);

      const changeTimer = setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === photos.length - 1 ? 0 : prev + 1
        );

        setVisible(true);
      }, 700);

      return changeTimer;
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, photos.length, selectedIndex]);

  if (photos.length === 0) {
    return null;
  }

  const photo = photos[currentIndex];

  function previous() {
    setVisible(false);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? photos.length - 1 : prev - 1
      );

      setVisible(true);
    }, 350);
  }

  function next() {
    setVisible(false);

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );

      setVisible(true);
    }, 350);
  }

  return (
    <>
      <div className="project-viewer">

        <div
          className="project-viewer-image"
          onClick={() => setSelectedIndex(currentIndex)}
        >
          <img
            className={visible ? "visible" : "hidden"}
            src={photo.image}
            alt={photo.title}
          />
        </div>

        <div className="project-viewer-info">

          <h2>{photo.title}</h2>

          <p className="project-viewer-meta">
            {photo.location}, {photo.country} · {photo.year}
          </p>

          <div className="project-viewer-controls">

            <button
              onClick={previous}
              aria-label="Previous photo"
            >
              ←
            </button>

            <span>
              {currentIndex + 1} / {photos.length}
            </span>

            <button
              onClick={next}
              aria-label="Next photo"
            >
              →
            </button>

          </div>

        </div>

        {photo.description && (
          <p className="project-viewer-description">
            {photo.description}
          </p>
        )}

      </div>

      <Lightbox
        photos={photos}
        currentIndex={selectedIndex}
        setCurrentIndex={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}

export default ProjectViewer;