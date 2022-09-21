import Typography from '@mui/material/Typography';
import styles from './header.module.css';

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Typography gutterBottom variant='h3' component='h1'>
      Bulletin Board
    </Typography>
  </header>
);
