export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  online?: boolean;
}

export interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  time: string;
  type: "text" | "image" | "file";
  images?: string[];
  delivered?: boolean;
}
