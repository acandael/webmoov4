// Import all project images
import skinCenterHero from "../assets/projects/skincenter-anniek-lambrecht/skincenter-screenshot.jpg";
import actionMakerHero from "../assets/projects/actionmaker/actionmaker-screenshot.jpg";

// Import gallery images
import skinCenter1 from "../assets/projects/skincenter-anniek-lambrecht/skincenter-anniek-lambrecht-1.jpg";
import skinCenter2 from "../assets/projects/skincenter-anniek-lambrecht/skincenter-anniek-lambrecht-2.jpg";
import skinCenter3 from "../assets/projects/skincenter-anniek-lambrecht/skincenter-anniek-lambrecht-3.jpg";
import skinCenter4 from "../assets/projects/skincenter-anniek-lambrecht/skincenter-anniek-lambrecht-4.jpg";
import skinCenter5 from "../assets/projects/skincenter-anniek-lambrecht/skincenter-anniek-lambrecht-5.jpg";
import skinCenter6 from "../assets/projects/skincenter-anniek-lambrecht/skincenter-anniek-lambrecht-6.jpg";

import actionMaker1 from "../assets/projects/actionmaker/actionmaker-1.jpg";
import actionMaker2 from "../assets/projects/actionmaker/actionmaker-2.jpg";
import actionMaker3 from "../assets/projects/actionmaker/actionmaker-3.jpg";
import actionMaker4 from "../assets/projects/actionmaker/actionmaker-4.jpg";
import actionMaker5 from "../assets/projects/actionmaker/actionmaker-5.jpg";
import actionMaker6 from "../assets/projects/actionmaker/actionmaker-6.jpg";

// Map project IDs to their images
export const projectImages = {
  "skincenter-anniek-lambrecht": {
    hero: skinCenterHero,
    gallery: [
      skinCenter1,
      skinCenter2,
      skinCenter3,
      skinCenter4,
      skinCenter5,
      skinCenter6,
    ],
  },
  "action-maker": {
    hero: actionMakerHero,
    gallery: [
      actionMaker1,
      actionMaker2,
      actionMaker3,
      actionMaker4,
      actionMaker5,
      actionMaker6,
    ],
  },
} as const;

// Type for project IDs
export type ProjectId = keyof typeof projectImages;
