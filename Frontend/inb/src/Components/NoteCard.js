import React, { useContext } from 'react'
import notecontext from '../Context/notes/noteContext'
export default function NoteCard(props) {
    const first = useContext(notecontext)
    const { deleteNote } = first;
    const { update } = props;
    return (
        <div className='inline-flex searchBar'>
            <div className="card m-1 " style={{ "width": "18rem" }}>    
                <div className="card-body">
                    <h5 className=" card-title font-extrabold inline-flex">{props.title}</h5>
                    <i className="fa-solid fa-trash-arrow-up mx-2 inline-flex" onClick={() => { deleteNote(props.id) }}></i> <i onClick={() => { update(props.id, props.title, props.mydesc, props.tag) }} className="fa-solid fa-pen-to-square inline-flex"></i>
                    <p className="card-text" >{props.mydesc}</p>
                </div>
            </div>
        </div>
    )
}
