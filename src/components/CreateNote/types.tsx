import { Note as NoteType } from '../../data';

export interface CreateNoteProps {
  onAdd: (note: NoteType) => void;
}
