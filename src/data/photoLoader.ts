const lms = import.meta.glob(
  "../assets/photos/LMS/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const cats = import.meta.glob(
  "../assets/photos/cats/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const misc = import.meta.glob(
  "../assets/photos/misc/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);


const Kaluga = import.meta.glob(
  "../assets/photos/Kaluga/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const Moscow = import.meta.glob(
  "../assets/photos/Moscow/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const Spb_1 = import.meta.glob(
  "../assets/photos/Saint-Petersburg_1/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

const Spb_2 = import.meta.glob(
  "../assets/photos/Saint-Petersburg_2/*.{jpg,jpeg,png,webp}",
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