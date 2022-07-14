export interface NoteProps {
  content: string;
  id: number;
  onDelete: (id: number) => void;
  title?: string;
}
