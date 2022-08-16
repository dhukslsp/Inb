import React, { Component , useContext} from 'react'
import notecontext from '../Context/notes/noteContext'
export default function NoteCard(props) {
    const first = useContext(notecontext)
    const { deleteNote } = first;
    return (
        <div className="card m-1 inline-flex" style={{ "width": "18rem" }}>
            <div className="card-body">
                <h5 className="card-title font-extrabold inline-flex">{props.title}</h5>
                <i className="fa-solid fa-trash-arrow-up mx-2 inline-flex" onClick={()=>{deleteNote(props.id)}}></i> <i className="fa-solid fa-pen-to-square inline-flex"></i>
                <p className="card-text">{props.mydesc}</p>
            </div> 
        </div>
    )
}
