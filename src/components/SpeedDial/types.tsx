import { Note as NoteType } from '../../data';

export interface SpeedDialProps {
  addNote: (note: NoteType) => void;
}
