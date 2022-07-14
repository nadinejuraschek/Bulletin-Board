import styles from './footer.module.css';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {currentYear}</p>
    </footer>
  );
};
