export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string | null | undefined;
  count: number;
  created_at: string;
}