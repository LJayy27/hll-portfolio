import { ProcessStepItem, Project } from "@/components/landing/types";

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Restaurant Training Hub",
    description: "Scalable training ecosystem for restaurant teams.",
    tags: ["Learning Systems", "UX Design"],
    image: {
      kind: "placeholder",
      value: "interior",
    },
  },
  {
    title: "AI-Guided Learning Simulation",
    description: "Adaptive simulation for practice, feedback, and decision-making.",
    tags: ["Instructional Design", "AI Learning"],
    image: {
      kind: "placeholder",
      value: "notes",
    },
  },
  {
    title: "Between Roads",
    description: "Immersive story experience for reflection and life transitions.",
    tags: ["Experience Design", "Immersive Learning"],
    image: {
      kind: "placeholder",
      value: "road",
    },
  },
];

export const processSteps: ProcessStepItem[] = [
  {
    name: "Research",
    detail: "Understand people, context, and needs.",
    icon: "search",
  },
  {
    name: "Structure",
    detail: "Organize learning and system logic.",
    icon: "grid",
  },
  {
    name: "Design",
    detail: "Craft experiences that engage.",
    icon: "pencil",
  },
  {
    name: "Prototype",
    detail: "Test, iterate, and refine solutions.",
    icon: "cube",
  },
  {
    name: "Refine",
    detail: "Measure impact and evolve.",
    icon: "spark",
  },
];
