import { BoardProps } from './types';
import { Note } from '../Note';
import { Note as NoteType } from '../../data';
import styles from './board.module.css';

export const Board = ({ deleteNote, notes }: BoardProps): JSX.Element => (
  <div className={styles.grid}>
    {notes.map(
      (note: NoteType, index: number): JSX.Element => (
        <Note
          content={note.content}
          id={index}
          key={index}
          mediaSrc={note.mediaSrc}
          onDelete={deleteNote}
          title={note.title}
        />
      )
    )}
  </div>
);
