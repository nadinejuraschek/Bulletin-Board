import './app.module.css';

import { Board, Header, SpeedDial } from '../../components';
import { Note as NoteType, notes as starterNotes } from '../../data';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AA7368',
    },
    secondary: {
      main: '#9faa68',
    },
    error: {
      main: '#D12929',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

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
    <ThemeProvider theme={theme}>
      <div className='app-wrapper'>
        <Header />
        <Board deleteNote={deleteNote} notes={notes} />
        <SpeedDial addNote={addNote} />
      </div>
    </ThemeProvider>
  );
};
