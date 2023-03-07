import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import {getNotes, addNote} from '../../utilities/notes-api'
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import NotesPage from '../NotesPage/NotesPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [notes, setNotes] = useState([])

  useEffect(function() {
      async function getAllNotes(){
        const userNotes = await getNotes()
        setNotes(userNotes)
      }
      getAllNotes()
    }, [user])

  async function addNewNote(newNote){
    console.log("newNote", newNote)
    await addNote(newNote)
    setNotes([...notes, newNote])
  }  


  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user ={user} setUser ={setUser}/>
          <NewNotePage addNewNote={addNewNote} user={user} />
          <NotesPage notes={notes} />
          {/* <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/notes/new" element={<NewNotePage />} />
            <Route path="/notes" element={<NotesPage />} />
          </Routes> */}
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


