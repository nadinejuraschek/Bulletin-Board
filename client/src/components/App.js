import {Header} from './Header';
import {Note} from './Note';
import {Footer} from './Footer';
import {notes} from '../notes';

export const App = () => (
    <div>
        <Header />
        { notes.map(note =>
                <Note key={note.key} title={note.title} content={note.content} />
            )}
        <Footer />
    </div>
);
