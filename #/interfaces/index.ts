export interface Session {
  code: string;
  mode: string;
}

export interface Snippet {
  id: string;
  name: string;
  createdAt: number;
  modifiedAt?: number;
  session: Session;
  tags: [];
}

export interface Editor {
  session: Session;
  theme: string;
}
