import type { CollectionEntry } from 'astro:content';

type ProjectData = CollectionEntry<'projects'>['data'];

export const projectSections = [
  { type: 'android', title: 'Apps' },
  { type: 'windows', title: 'Programas Windows' },
  { type: 'web', title: 'Webs' },
] as const satisfies ReadonlyArray<{
  type: ProjectData['type'];
  title: string;
}>;

export const projectTypeLabels = {
  android: 'Android',
  windows: 'Windows',
  web: 'Web',
  other: 'Otro',
} satisfies Record<ProjectData['type'], string>;

export const projectStatusLabels = {
  development: 'En desarrollo',
  available: 'Disponible',
  archived: 'Archivado',
} satisfies Record<ProjectData['status'], string>;
