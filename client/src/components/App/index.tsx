import { Header } from '../Header';
import { Note } from '../Note';
import { Footer } from '../Footer';
import { notes, Note as NoteType } from '../../data';

export const App = (): JSX.Element => (
  <div>
    <Header />
    {notes.map(
      (note: NoteType): JSX.Element => (
        <Note key={note.key} title={note.title} content={note.content} />
      )
    )}
    <Footer />
  </div>
);
