export type TableOfContent = ContentItem[];

export interface ContentItem {
  heading: string;
  description: string;
  packageName: string;
  slug: string;
}
