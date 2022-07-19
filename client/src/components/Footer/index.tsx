export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear}</p>
    </footer>
  );
};
