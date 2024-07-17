import { useParams,useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { useState,useEffect } from "react"
import { editNote } from "../store/noteSlice.jsx"

import styles from "../styles/editnote.module.css"
function Edit(){
  const { id } = useParams()
  const notes = useSelector(state => state.note.note)
  const [noteId,setNoteId] = useState()
  const [title,setTitle] = useState("")
  const [note,setNote] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function getNote(){
      const editedNote = notes.find(note => note.id === id)
        setNoteId(editedNote.id)
        setTitle(editedNote.title)
        setNote(editedNote.note)
    }
  
  useEffect(() => {
    getNote()
  },[id])
 
 function handleSubmit(e) {
   e.preventDefault()
   dispatch(editNote({
     id:noteId,
     title:title,
     note:note
   }))
   setTitle('')
   setNote('')
   navigate(-1)
 }
  
  return(
    <>
      <h3>Edit</h3>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
                <label htmlfor="title">Title</label><br/>
                <input
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                /><br/>
              <label htmlfor="note">Note</label><br/>
                <textarea
                cols="40"
                rows="20"
                    type="text"
                    id="note"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    required
                /><br/>
               < button type="submit">Edit</button>
  </form>
    </>
    )
}
export default Edit