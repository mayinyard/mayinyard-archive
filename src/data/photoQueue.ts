import type { Photo } from "./types";
import { allPhotos } from "./photos";

let queue: Photo[] = [];
let pointer = 0;

function shuffle<T>(array: T[]) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function initializeQueue(currentPhotos: Photo[] = []) {
  queue = shuffle(
    allPhotos.filter(
      (photo) =>
        !currentPhotos.some(
          (current) => current.image === photo.image
        )
    )
  );

  pointer = 0;
}

export function getNextPhoto(currentPhotos: Photo[]) {
  if (queue.length === 0 || pointer >= queue.length) {
    initializeQueue(currentPhotos);
  }

  return queue[pointer++];
}