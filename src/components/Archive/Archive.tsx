import { useEffect, useState } from "react";

import ArchiveCard from "./ArchiveCard";
import Lightbox from "../Lightbox/Lightbox";

import { allPhotos } from "../../data/photos";

import {
  initializeQueue,
  getNextPhoto,
} from "../../data/photoQueue";


function Archive() {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

const [photos, setPhotos] = useState(() => {
  const shuffled = [...allPhotos].sort(
    () => Math.random() - 0.5
  );

  return shuffled.slice(0, 18);
});

useEffect(() => {
  initializeQueue(photos);
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (selectedIndex !== null) return;

      setPhotos((current) => {
        const updated = [...current];

        const randomCard = Math.floor(
          Math.random() * updated.length
        );

        updated[randomCard] = getNextPhoto(updated);

        return updated;
      });
    }, 10000);

    return () => clearInterval(timer);
  }, [selectedIndex]);

  return (
    <section id="archive" className="archive">
      <div className="archive-header">
        <h2>Archive</h2>

        <p>Photographs change automatically — stay a while and see what appears.</p>
      </div>

      <div className="archive-grid">
        {photos.map((photo, index) => (
          <ArchiveCard
            key={photo.id}
            photo={photo}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <Lightbox
        photos={photos}
        currentIndex={selectedIndex}
        setCurrentIndex={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </section>
  );
}

export default Archive;