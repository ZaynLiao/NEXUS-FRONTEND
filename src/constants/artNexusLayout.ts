export type ArtNexusPalette = {
  shell: string;
  text: string;
  border: string;
};

export type ArtNexusLayout = {
  shell: string;
  hero: string;
  heroInner: string;
  main: string;
  content: string;
};

export const createArtNexusLayout = (
  palette: ArtNexusPalette
): ArtNexusLayout => ({
  shell:
    `min-h-screen font-sans antialiased ${palette.shell} ${palette.text}`.trim(),
  hero: `relative overflow-hidden border-b ${palette.border}`.trim(),
  heroInner: "relative mx-auto max-w-6xl px-6 py-16 space-y-4",
  main: "relative py-16",
  content: "mx-auto max-w-6xl px-6 space-y-10",
});
