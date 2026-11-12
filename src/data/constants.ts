// Keep the same 24 key positions so the interactive keyboard retains its
// original layout while its labels and artwork reflect Waleed's skills.
export enum SkillNames {
  HTML_CSS = "html-css",
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  PYTHON = "python",
  NODEJS = "nodejs",
  FASTAPI = "fastapi",
  REST_APIS = "rest-apis",
  FIREBASE = "firebase",
  SUPABASE = "supabase",
  MONGODB = "mongodb",
  VERCEL = "vercel",
  SKLEARN = "scikit-learn",
  XGBOOST = "xgboost",
  NEURAL_NETWORKS = "neural-networks",
  DATA_PREPROCESSING = "data-preprocessing",
  OPENCV = "opencv",
  YOLO = "yolo",
  OBJECT_TRACKING = "object-tracking",
  OCR = "ocr",
  GIT_GITHUB = "git-github",
  VSCODE = "vscode",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};

const keyboardLogo = (file: string) => `/assets/keyboard/logos/${file}.svg`;

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML_CSS]: {
    id: 1, name: "html-css", label: "HTML5 + CSS3",
    shortDescription: "Frontend markup and styling with HTML5 and CSS3.",
    color: "#e34f26", icon: keyboardLogo("html-css"), keyboardColor: "#df592e",
  },
  [SkillNames.JS]: {
    id: 2, name: "js", label: "JavaScript",
    shortDescription: "Programming interactive website and application behavior.",
    color: "#f0db4f", icon: keyboardLogo("js"), keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 3, name: "ts", label: "TypeScript",
    shortDescription: "Typed JavaScript for frontend and application development.",
    color: "#3178c6", icon: keyboardLogo("ts"), keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 4, name: "react", label: "React.js",
    shortDescription: "Building reusable, component-based user interfaces.",
    color: "#61dafb", icon: keyboardLogo("react"), keyboardColor: "#00cce8",
  },
  [SkillNames.NEXTJS]: {
    id: 5, name: "nextjs", label: "Next.js",
    shortDescription: "Developing full-stack websites and web applications.",
    color: "#ffffff", icon: keyboardLogo("nextjs"), keyboardColor: "#333537",
  },
  [SkillNames.TAILWIND]: {
    id: 6, name: "tailwind", label: "Tailwind CSS",
    shortDescription: "Styling responsive web interfaces.",
    color: "#38bdf8", icon: keyboardLogo("tailwind"), keyboardColor: "#00bfd8",
  },
  [SkillNames.PYTHON]: {
    id: 7, name: "python", label: "Python",
    shortDescription: "Programming language used in the AI and Machine Learning toolkit.",
    color: "#3776ab", icon: "/assets/logos/python-mono.svg", keyboardIcon: keyboardLogo("python"), keyboardColor: "#3977a8",
  },
  [SkillNames.NODEJS]: {
    id: 8, name: "nodejs", label: "Node.js",
    shortDescription: "Server-side JavaScript development.",
    color: "#6cc24a", icon: keyboardLogo("nodejs"), keyboardColor: "#00952c",
  },
  [SkillNames.FASTAPI]: {
    id: 9, name: "fastapi", label: "FastAPI",
    shortDescription: "Building API services with Python.",
    color: "#009688", icon: keyboardLogo("fastapi"), keyboardColor: "#008f83",
  },
  [SkillNames.REST_APIS]: {
    id: 10, name: "rest-apis", label: "REST APIs + API Integration",
    shortDescription: "Designing and integrating REST APIs and external services.",
    color: "#0ea5e9", icon: keyboardLogo("api"), keyboardColor: "#087cac",
  },
  [SkillNames.FIREBASE]: {
    id: 11, name: "firebase", label: "Firebase + Firestore",
    shortDescription: "Using Firebase services, including the Firestore database.",
    color: "#ffca28", icon: "/assets/logos/firebase-mono.svg", keyboardIcon: keyboardLogo("firebase"), keyboardColor: "#f3a712",
  },
  [SkillNames.SUPABASE]: {
    id: 12, name: "supabase", label: "Supabase",
    shortDescription: "Working with Supabase application services.",
    color: "#3ecf8e", icon: "/assets/logos/supabase-mono.svg", keyboardIcon: keyboardLogo("supabase"), keyboardColor: "#219e73",
  },
  [SkillNames.MONGODB]: {
    id: 13, name: "mongodb", label: "MongoDB",
    shortDescription: "Working with document databases.",
    color: "#47a248", icon: keyboardLogo("mongodb"), keyboardColor: "#00c51b",
  },
  [SkillNames.VERCEL]: {
    id: 14, name: "vercel", label: "Vercel",
    shortDescription: "Deploying and hosting web applications.",
    color: "#ffffff", icon: "/assets/logos/vercel-mono.svg", keyboardIcon: keyboardLogo("vercel"), keyboardColor: "#333537",
  },
  [SkillNames.SKLEARN]: {
    id: 15, name: "scikit-learn", label: "Scikit-learn + Machine Learning",
    shortDescription: "Machine Learning workflows using Scikit-learn.",
    color: "#f89939", icon: keyboardLogo("scikit-learn"), keyboardColor: "#e99539",
  },
  [SkillNames.XGBOOST]: {
    id: 16, name: "xgboost", label: "XGBoost",
    shortDescription: "Machine Learning with gradient-boosted models.",
    color: "#40a578", icon: keyboardLogo("xgboost"), keyboardColor: "#287c59",
  },
  [SkillNames.NEURAL_NETWORKS]: {
    id: 17, name: "neural-networks", label: "Neural Networks",
    shortDescription: "Exploring neural network concepts and models.",
    color: "#8b5cf6", icon: keyboardLogo("neural-networks"), keyboardColor: "#7850ce",
  },
  [SkillNames.DATA_PREPROCESSING]: {
    id: 18, name: "data-preprocessing", label: "Data Preprocessing",
    shortDescription: "Preparing data for Machine Learning workflows.",
    color: "#f59e0b", icon: keyboardLogo("data-preprocessing"), keyboardColor: "#c27e08",
  },
  [SkillNames.OPENCV]: {
    id: 19, name: "opencv", label: "OpenCV + Image Processing",
    shortDescription: "Computer Vision fundamentals and image processing with OpenCV.",
    color: "#5c3ee8", icon: keyboardLogo("opencv"), keyboardColor: "#5842bd",
  },
  [SkillNames.YOLO]: {
    id: 20, name: "yolo", label: "YOLO + Object Detection",
    shortDescription: "Computer Vision and object-detection workflows.",
    color: "#8b5cf6", icon: keyboardLogo("yolo"), keyboardColor: "#7850ce",
  },
  [SkillNames.OBJECT_TRACKING]: {
    id: 21, name: "object-tracking", label: "Object Tracking",
    shortDescription: "Tracking objects across image and video sequences.",
    color: "#14b8a6", icon: keyboardLogo("object-tracking"), keyboardColor: "#0f8f82",
  },
  [SkillNames.OCR]: {
    id: 22, name: "ocr", label: "OCR",
    shortDescription: "Optical Character Recognition and image-based text extraction.",
    color: "#6366f1", icon: keyboardLogo("ocr"), keyboardColor: "#4f52c1",
  },
  [SkillNames.GIT_GITHUB]: {
    id: 23, name: "git-github", label: "Git + GitHub",
    shortDescription: "Version control and code collaboration with Git and GitHub.",
    color: "#f1502f", icon: keyboardLogo("git"), keyboardColor: "#ff4622",
  },
  [SkillNames.VSCODE]: {
    id: 24, name: "vscode", label: "VS Code",
    shortDescription: "Development tools and editor workflows.",
    color: "#007acc", icon: keyboardLogo("vscode"), keyboardColor: "#0874bd",
  },
};

export type Experience = {
  id: number;
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [],
    title: "Full Stack Web Engineer",
    company: "The Byte Systems · Johar Town, Lahore, Pakistan",
    description: [
      "Develop full-stack websites and web applications.",
      "Build frontend interfaces and reusable components with React.js and Next.js.",
      "Develop backend functionality and integrate APIs, databases, and authentication.",
      "Create responsive interfaces for client and application requirements.",
      "Maintain websites, debug issues, and optimize functionality and performance.",
    ],
    skills: [SkillNames.REACT, SkillNames.NEXTJS, SkillNames.FASTAPI, SkillNames.REST_APIS],
  },
  {
    id: 2,
    periods: [],
    title: "Freelance Website Designer & Developer",
    company: "Freelance / Self-employed · Remote",
    description: [
      "Design and develop professional websites for clients.",
      "Create responsive website layouts with custom CSS and JavaScript.",
      "Customize and refine websites to meet client requirements.",
      "Build landing pages and business websites.",
      "Integrate booking systems, forms, popups, and third-party services.",
      "Deliver client-focused website design and development.",
    ],
    skills: [SkillNames.HTML_CSS, SkillNames.JS, SkillNames.TAILWIND],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
