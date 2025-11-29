export type NexusHeroStat = {
  label: string;
  value: string;
  detail: string;
};

export type NexusHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  chips: string[];
  stats: NexusHeroStat[];
};
