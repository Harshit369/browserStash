export interface Snippet {
  id: string;
  name: string;
  createdAt: number;
  modifiedAt: number;
  code: string;
  tags: [];
  languageMode: string;
}

export interface Editor {
  code: string;
  mode: string;
  theme: string;
}
