import { Note as NoteType } from '../../data';

export interface BoardProps {
  deleteNote: (id: number) => void;
  notes: NoteType[];
}
