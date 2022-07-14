import { ChangeEvent, MouseEvent, useState } from 'react';
import { CreateNoteProps } from './types';
import { Note as NoteType } from '../../data';

export const CreateNote = ({ onAdd }: CreateNoteProps): JSX.Element => {
  const [note, setNote] = useState<NoteType>({ content: '', title: '' });

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    setNote((prevNote: NoteType): NoteType => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    onAdd(note);
    setNote({ content: '', title: '' });
  };

  return (
    <div>
      <form>
        <input
          name='title'
          onChange={handleChange}
          placeholder='Title'
          value={note.title}
        />
        <textarea
          name='content'
          onChange={handleChange}
          placeholder='Take a note...'
          rows={3}
          value={note.content}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};
