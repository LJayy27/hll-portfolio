export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: {
    kind: "placeholder" | "file";
    value: string;
  };
};

export type ProcessStepItem = {
  name: string;
  detail: string;
  icon: "search" | "grid" | "pencil" | "cube" | "spark";
};
