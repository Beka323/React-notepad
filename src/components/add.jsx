import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react";
import { addNote } from "../store/noteSlice.jsx";

import styles from "../styles/addnote.module.css"
function Add() {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(
            addNote({
                id: nanoid(),
                title: title,
                note: note
            })
        );
        setTitle('')
        setNote('')
    }
    return (
        <>
          <h3>Add</h3>
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
                <button type="submit">Add</button>
            </form>
        </>
    );
}
export default Add;
