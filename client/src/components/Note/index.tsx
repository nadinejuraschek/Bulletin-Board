import { NoteProps } from './types';

export const Note = ({ content, title = '' }: NoteProps): JSX.Element => {
  return (
    <div className='note'>
      {title && <h1>{title}</h1>}
      <p>{content}</p>
    </div>
  );
};
