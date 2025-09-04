import { ReactNode } from "react";

export type ProjectList = {
  name: string;
  slug: string;
  videoSrc: string;
  liveLink: string;
  tagline: string;
  year: string;
  overview: string;
  making01: string;
  making02: string;
  making03: string;
  codeLink: string;
  builtWith: {
    name: string;
    icon?: ReactNode;
  }[];
  renderImages: () => ReactNode;
};
