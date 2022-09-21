import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import { NoteProps } from './types';
import Typography from '@mui/material/Typography';
import styles from './note.module.css';

export const Note = ({
  content,
  id,
  mediaSrc = '',
  onDelete,
  title = '',
}: NoteProps): JSX.Element => {
  const handleDelete = (): void => onDelete(id);

  return (
    <Card className={styles.note}>
      {mediaSrc && (
        <CardMedia component='img' height='140' image={mediaSrc} alt={title} />
      )}
      <CardContent>
        {title && (
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        )}
        <Typography color='text.secondary' variant='body1' component='p'>
          {content}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <IconButton
          aria-label='delete-note'
          color='error'
          onClick={handleDelete}
        >
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
