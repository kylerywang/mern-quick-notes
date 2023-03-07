import {useState} from "react";

export default function NewNotePage({addNewNote, user}) {
    const [newText, setNewText] = useState("")
    function handleAddNote(evt){
        evt.preventDefault()
        const newUserNote = {
            text: newText,
            user: user
        }
        addNewNote(newUserNote)
        setNewText("")
    }
    return (
    <>
    <h2>New Note</h2>
      <form onSubmit={handleAddNote}>
        <input
          value={newText}
          onChange={(evt) => setNewText(evt.target.value)}
          placeholder="New Note"
          required
        //   pattern=".{4,}"
        />
        <button type="submit"> ADD NOTE </button>
      </form>
      </>
    );
}