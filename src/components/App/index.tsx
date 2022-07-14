import { useState } from 'react';
import { Header } from '../Header';
import { Note } from '../Note';
import { Footer } from '../Footer';
import { CreateNote } from '../CreateNote';
import { notes as starterNotes, Note as NoteType } from '../../data';

export const App = (): JSX.Element => {
  const [notes, setNotes] = useState<NoteType[] | []>(starterNotes);

  const addNote = (newNote: NoteType): void => {
    setNotes((prevNotes: NoteType[]) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: number): void => {
    setNotes((prevNotes: NoteType[]): NoteType[] => {
      return prevNotes.filter((item: NoteType, index: number) => index !== id);
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map(
        (note: NoteType, index: number): JSX.Element => (
          <Note
            content={note.content}
            id={index}
            key={index}
            onDelete={deleteNote}
            title={note.title}
          />
        )
      )}
      <Footer />
    </div>
  );
};
