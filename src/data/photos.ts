import { LMS } from "./projects/lms";
import { Cats } from "./projects/cats";
import { Misc } from "./projects/misc";
import { Kaluga } from "./projects/kaluga";
import { Moscow } from "./projects/Moscow";
import { Spb_1 } from "./projects/spb_1";
import { Spb_2 } from "./projects/spb_2";

export const allPhotos = [
  ...LMS,
  ...Cats,
  ...Misc,
  ...Kaluga,
  ...Moscow,
  ...Spb_1,
  ...Spb_2,
];