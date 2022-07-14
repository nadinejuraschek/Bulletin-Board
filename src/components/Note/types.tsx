export interface NoteProps {
  content: string;
  id: number;
  mediaSrc?: string;
  onDelete: (id: number) => void;
  title?: string;
}
