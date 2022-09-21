import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { CreateNoteProps } from './types';
import { Note as NoteType } from '../../data';
import styles from './form.module.css';

export const CreateNote = ({
  closeForm,
  onAdd,
}: CreateNoteProps): JSX.Element => {
  const emptyNote = { content: '', mediaSrc: '', title: '' };
  const [note, setNote] = useState<NoteType>(emptyNote);

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    setNote((prevNote: NoteType): NoteType => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    if (note.content.length) {
      onAdd(note);
      setNote(emptyNote);
      closeForm();
    }
  };

  return (
    <Card className={styles.formWrapper}>
      <Box autoComplete='off' component='form' noValidate>
        <CardContent>
          <TextField
            fullWidth
            id='note-title'
            label='Title'
            margin='normal'
            name='title'
            onChange={handleChange}
            placeholder='Title'
            size='medium'
            value={note.title}
            variant='outlined'
          />
          <TextField
            fullWidth
            id='note-mediaSrc'
            label='Media Source'
            margin='normal'
            name='mediaSrc'
            onChange={handleChange}
            placeholder='Media Source'
            size='medium'
            value={note.mediaSrc}
            variant='outlined'
          />
          <TextField
            fullWidth
            id='note-content'
            label='Content *'
            margin='normal'
            name='content'
            minRows={3}
            multiline
            onChange={handleChange}
            placeholder='Take a note...'
            size='medium'
            value={note.content}
            variant='outlined'
          />
        </CardContent>
        <CardActions className={styles.actions}>
          <Button
            aria-label='add-note'
            color='primary'
            onClick={handleSubmit}
            variant='contained'
          >
            Add
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
