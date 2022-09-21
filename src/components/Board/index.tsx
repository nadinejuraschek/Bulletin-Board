import Masonry from '@mui/lab/Masonry';
import { BoardProps } from './types';
import { Note } from '../Note';
import { Footer } from '../Footer';
import { Note as NoteType } from '../../data';
import styles from './board.module.css';

export const Board = ({ deleteNote, notes }: BoardProps): JSX.Element => (
  <div className={styles.content}>
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
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
    </Masonry>
    <Footer />
  </div>
);
