import { CreateNote } from '../CreateNote';
import SpeedDialComp from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { SpeedDialProps } from './types';
import styles from './speedDial.module.css';
import { useState } from 'react';

export const SpeedDial = ({ addNote }: SpeedDialProps): JSX.Element => {
  const [displayCreateForm, setDisplayCreateForm] = useState(false);

  return (
    <>
      <SpeedDialComp
        ariaLabel='speed-dial'
        className={styles.speedDial}
        icon={<SpeedDialIcon />}
        onClick={() => setDisplayCreateForm(!displayCreateForm)}
      />
      {displayCreateForm && (
        <CreateNote
          closeForm={() => setDisplayCreateForm(false)}
          onAdd={addNote}
        />
      )}
    </>
  );
};
