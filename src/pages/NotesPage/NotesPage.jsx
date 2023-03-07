import { checkToken } from '../../utilities/users-service'

export default function NotesPage({notes}) {


    return (
        <>
            <h1>NotesPage</h1>
            <ul className="ToDoList">
                {notes.map((note) => (
                    <li>{note.text}</li>
                ))}
            </ul>   
        </>
    );
}