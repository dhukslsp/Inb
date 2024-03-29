import React, { useState,useContext } from 'react'
import notecontext from '../Context/notes/noteContext';
function AddA() {
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const first = useContext(notecontext);
    const {loginJwt} = first;
    const addnote = async (title, description, tag) => {
        // this will update entries with PUT
        const url = `https://inb.vercel.app/api/notes/addnote`
        const response = await fetch(url, {
            method: "post",
            mode: 'cors',
            body: JSON.stringify({ title: title, description: description, tag: tag }),
            headers: {
                'content-Type': 'application/json',
                'auth-tocken': loginJwt
            }
        })
        console.log(response)
        alert("You Note Has been added plase refresh the page to see you note");
    }
    const onchangehandler1 = (e) => {
        setNote({ ...note, [e.target.name]: [e.target.value] })
    }
    return (
        <div>
            <div className='p-10'>
                <p className='text-xl font-extrabold' style={{ marginBottom: "2pc" }}>Create a New Note</p>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" onChange={onchangehandler1} id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                    <input type="text" name="tag" className="form-control" onChange={onchangehandler1} id="tag" />
                </div>
                <div className="mb-3">
                    <label htmFor='desc' htmlFor="exampleFormControlTextarea1" className="desc">Example textarea</label>
                    <textarea className="form-control" name="description" id="exampleFormControlTextarea1" onChange={onchangehandler1} rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => { addnote(note.title[0], note.description[0], note.tag[0]) }}>Add Note</button>
            </div>
        </div>
    )
}

export default AddA