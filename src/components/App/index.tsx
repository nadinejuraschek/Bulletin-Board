import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Board } from '../Board';
import { Header } from '../Header';
import { SpeedDial } from '../SpeedDial';
import { notes as starterNotes, Note as NoteType } from '../../data';
import './app.module.css';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#AA7368',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
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
