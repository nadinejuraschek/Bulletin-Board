export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>© {currentYear}</p>
        </footer>
    );
};
