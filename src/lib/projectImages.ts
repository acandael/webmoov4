// Import all project images
import skinCenterHero from "../assets/projects/skincenter-anniek-lambrecht/skincenter-screenshot.jpg";
import actionMakerHero from "../assets/projects/actionmaker/actionmaker-screenshot.jpg";

// Map project IDs to their images
export const projectImages = {
  "skincenter-anniek-lambrecht": {
    hero: skinCenterHero,
  },
  "action-maker": {
    hero: actionMakerHero,
  },
} as const;

// Type for project IDs
export type ProjectId = keyof typeof projectImages;
