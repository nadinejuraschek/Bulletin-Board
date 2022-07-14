import { NoteProps } from './types';

export const Note = ({
  content,
  id,
  onDelete,
  title = '',
}: NoteProps): JSX.Element => {
  const handleDelete = (): void => onDelete(id);

  return (
    <div className='note'>
      {title && <h1>{title}</h1>}
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
