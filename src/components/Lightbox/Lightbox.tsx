import { useEffect } from "react";
import "./Lightbox.css";

import type { Photo } from "../../data/types";


type Props = {
  photos: Photo[];
  currentIndex: number | null;
  setCurrentIndex: (index: number) => void;
  onClose: () => void;
};

function Lightbox({
  photos,
  currentIndex,
  setCurrentIndex,
  onClose,
}: Props) {

  if (currentIndex === null) return null;

  const photo = photos[currentIndex];

function previous() {
  if (currentIndex === null) return;

  setCurrentIndex(
    currentIndex === 0
      ? photos.length - 1
      : currentIndex - 1
  );
}

function next() {
  if (currentIndex === null) return;

  setCurrentIndex(
    currentIndex === photos.length - 1
      ? 0
      : currentIndex + 1
  );
}
useEffect(() => {
  if (currentIndex === null) return;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      previous();
    }

    if (event.key === "ArrowRight") {
      next();
    }

    if (event.key === "Escape") {
      onClose();
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [currentIndex, photos.length, onClose]);

  return (
    <div
      className="lightbox"
      onClick={onClose}
    >
      <button
        className="lightbox-arrow left"
        onClick={(e) => {
          e.stopPropagation();
          previous();
        }}
      >
        ←
      </button>

      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.image}
          alt={photo.title}
        />

        <div className="lightbox-info">
         <h2>{photo.title}</h2>

<p>
  {photo.location}, {photo.country}
</p>

<p>{photo.year}</p>

<p>{photo.description}</p>
        </div>
      </div>

      <button
        className="lightbox-arrow right"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        →
      </button>
    </div>
  );
}

export default Lightbox;