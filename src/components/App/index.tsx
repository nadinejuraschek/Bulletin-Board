import { useState } from 'react';
import { Board } from '../Board';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SpeedDial } from '../SpeedDial';
import { notes as starterNotes, Note as NoteType } from '../../data';
import './app.module.css';

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
      <Board deleteNote={deleteNote} notes={notes} />
      <SpeedDial addNote={addNote} />
      <Footer />
    </div>
  );
};
