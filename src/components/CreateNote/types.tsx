import { Note as NoteType } from '../../data';

export interface CreateNoteProps {
  closeForm: () => void;
  onAdd: (note: NoteType) => void;
}
