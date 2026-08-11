const lms = import.meta.glob(
  "../assets/photos-optimized/LMS/*.webp",
  {
    eager: true,
    import: "default",
  }
);

const cats = import.meta.glob(
  "../assets/photos-optimized/cats/*.webp",
  {
    eager: true,
    import: "default",
  }
);

const misc = import.meta.glob(
  "../assets/photos-optimized/misc/*.webp",
  {
    eager: true,
    import: "default",
  }
);

const Kaluga = import.meta.glob(
  "../assets/photos-optimized/Kaluga/*.webp",
  {
    eager: true,
    import: "default",
  }
);

const Moscow = import.meta.glob(
  "../assets/photos-optimized/Moscow/*.webp",
  {
    eager: true,
    import: "default",
  }
);

const Spb_1 = import.meta.glob(
  "../assets/photos-optimized/Saint-Petersburg_1/*.webp",
  {
    eager: true,
    import: "default",
  }
);

const Spb_2 = import.meta.glob(
  "../assets/photos-optimized/Saint-Petersburg-2/*.webp",
  {
    eager: true,
    import: "default",
  }
);

export const photos = [
  ...Object.values(lms),
  ...Object.values(cats),
  ...Object.values(misc),
  ...Object.values(Kaluga),
  ...Object.values(Moscow),
  ...Object.values(Spb_1),
  ...Object.values(Spb_2),
];