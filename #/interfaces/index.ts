export interface Snippet {
  id: string;
  name: string;
  createdAt: number;
  modifiedAt: number;
  code: string;
  tags: [];
  languageMode: string;
}
